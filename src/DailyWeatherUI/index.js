import moment from 'moment';
import {Box, HStack, Icon, Text} from 'native-base';
import React from 'react';
import {Pressable} from 'react-native';
import Cloudy from '../assets/images/cloudy.svg';

function DailyWeatherUI({WeatherData, navigation}) {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Details', {date: WeatherData.datetime})
      }>
      <Box my="2" mx="5" py="2" w="90%">
        <HStack>
          <Text color="white" fontSize="xl" fontWeight="bold" w="35%">
            {moment(WeatherData.datetime).format('dddd')}
          </Text>
          <Text color="white" w="20%">
            {WeatherData.tempmax}
            {'\u00b0'}
          </Text>
          <Text color="white" w="20%">
            {WeatherData.tempmin}
            {'\u00b0'}
          </Text>
          <Cloudy />
        </HStack>
      </Box>
    </Pressable>
  );
}

export default DailyWeatherUI;
