import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppColor} from '../../constcolors';
import DailyWeatherUI from '../DailyWeatherUI';
import WeatherHighlight from '../WeatherHighlight';
import WeatherHome from '../WeatherHome';

const Stack = createNativeStackNavigator();

export default function AppStart() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={WeatherHome}
          options={{
            headerStyle: {
              backgroundColor: AppColor,
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={WeatherHighlight}
          options={{
            headerStyle: {
              backgroundColor: AppColor,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
