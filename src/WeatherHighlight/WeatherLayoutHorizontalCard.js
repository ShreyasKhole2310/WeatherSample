import {Box, Text, VStack} from 'native-base';
import React from 'react';
import {Pressable} from 'react-native';

const WeatherLayoutHorizontalCard = ({item, navigation}) => {
  return (
    <Pressable>
      <Box mx="4" p="4" borderRadius={20} bgColor="white:alpha.30">
        <VStack justifyContent="center">
          <Text>{item.datetime}</Text>
          <Text fontSize="5xl">
            {Math.floor(item.temp)}
            {'\u00b0'}
          </Text>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default WeatherLayoutHorizontalCard;
