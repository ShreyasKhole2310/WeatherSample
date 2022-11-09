import moment from 'moment';
import {Box, HStack, Icon, Text} from 'native-base';
import React from 'react';
import Cloudy from '../assets/images/cloudy.svg';

function DailyWeatherUI({WeatherData}) {
  return (
    <Box
      pl={['0', '4']}
      pr={['0', '5']}
      mx="10"
      my="5"
      py="2"
      w="80%"
      borderBottomColor="white"
      borderBottomWidth={1}>
      <HStack>
        <Text color="white" fontSize="xl" fontWeight="bold" w="35%">
          {moment(WeatherData.datetime).format('dddd')}
        </Text>
        <Text color="white" w="20%">
          {WeatherData.tempmax}
        </Text>
        <Text color="white" w="20%">
          {WeatherData.tempmin}
        </Text>
        <Cloudy width={120} height={50} />
      </HStack>
    </Box>
  );
}

export default DailyWeatherUI;
