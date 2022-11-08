import {Box, Center, Heading, StatusBar, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const AppName = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <Center bg="green.100" height={20}>
        <Heading>Weather App</Heading>
      </Center>
    </View>
  );
};

export default AppName;
