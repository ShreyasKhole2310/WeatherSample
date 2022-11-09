import {Box, Center, Heading, StatusBar, Text, View, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const AppName = () => {
  return (
    <VStack style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <Center bg="green.100" height={20}>
        <Heading>Weather App</Heading>
      </Center>
    </VStack>
  );
};

export default AppName;
