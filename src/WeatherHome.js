import {
  FlatList,
  NativeBaseProvider,
  Flex,
  StatusBar,
  Center,
  Heading,
  Text,
  Box,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import WeatherApi from './WeatherApi';
import {Entypo} from '@native-base/icons';
import DailyWeatherUI from './DailyWeatherUI/index.js';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppColor} from '../constcolors';

export default function WeatherHome({navigation}) {
  const [weatherData, setWeatherData] = useState('');

  const WeatherApiCall =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services' +
    '/timeline/Mumbai?unitGroup=metric&key=LR6KWXFQ5KUVDTCKEJAHVC5AS&contentType=json';

  const getData = () => {
    WeatherApi(WeatherApiCall)
      .then(res => {
        setWeatherData(res);
        // setWeatherData(JSON.stringify(res.days[4]));
      })
      .catch(val => console.log(val));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Flex direction="column" bgColor={AppColor}>
          <StatusBar barStyle={'light-content'} />
          <Center height="5%">
            <Heading color="white">{weatherData.address}</Heading>
          </Center>
          <Box
            border="1"
            borderRadius="xl"
            m={3}
            bgColor="gray.600"
            padding={5}>
            <VStack space="1">
              <Text color="white" fontSize="sm">
                {weatherData && weatherData.days[0].description}
              </Text>
            </VStack>
          </Box>
          <FlatList
            data={weatherData.days}
            renderItem={({item}) => (
              <DailyWeatherUI WeatherData={item} navigation={navigation} />
            )}
            keyExtractor={(item, index) => index}
          />
        </Flex>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
