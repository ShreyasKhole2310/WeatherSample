import {
  Box,
  FlatList,
  NativeBaseProvider,
  Text,
  HStack,
  Avatar,
  VStack,
  Spacer,
  Heading,
  View,
  Icon,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import AppName from './AppName';
import SampleData, {SampleData2} from './SampleData';
import WeatherApi from './WeatherApi';
import {Entypo} from '@native-base/icons';

export default function WeatherHome() {
  const [weatherData, setWeatherData] = useState('');

  const WeatherApiCall =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services' +
    '/timeline/Pune?unitGroup=metric&key=LR6KWXFQ5KUVDTCKEJAHVC5AS&contentType=json';

  const getData = () => {
    WeatherApi(WeatherApiCall)
      .then(res => {
        setWeatherData(res.days);
        // setWeatherData(JSON.stringify(res.days[4]));
      })
      .catch(val => console.log(val));
  };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <NativeBaseProvider>
      <VStack>
        <AppName />
        <FlatList
          data={SampleData2.days}
          mt="20"
          renderItem={({item}) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'muted.50',
              }}
              borderColor="muted.800"
              pl={['0', '4']}
              pr={['0', '5']}
              mx="10"
              my="5"
              py="2">
              <HStack space={[2, 3]} justifyContent="space-between">
                <Icon as={Entypo} name="suitcase" size="24" />
                <VStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="white"
                    bold>
                    {item.conditions}
                  </Text>
                  <Text
                    color="white"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.description}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  color="black"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  {item.datetime}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection: 'column',
  },
});
