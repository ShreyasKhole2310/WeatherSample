import {
  FlatList,
  NativeBaseProvider,
  Flex,
  StatusBar,
  Center,
  Heading,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import SampleData, {SampleData2} from './SampleData';
import WeatherApi from './WeatherApi';
import {Entypo} from '@native-base/icons';
import DailyWeatherUI from './DailyWeatherUI/index.js';

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
      <Flex direction="column">
        <StatusBar barStyle={'light-content'} />
        <Center bg="green.100" height={20}>
          <Heading>Weather App</Heading>
        </Center>
        <Heading color="white" ml={5} mt={5}>
          {SampleData2.address} weather this week
        </Heading>
        <FlatList
          data={SampleData2.days}
          renderItem={({item}) => <DailyWeatherUI WeatherData={item} />}
          keyExtractor={(item, index) => index}
        />
      </Flex>
    </NativeBaseProvider>
  );
}
