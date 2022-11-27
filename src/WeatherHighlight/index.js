import {
  Box,
  FlatList,
  Heading,
  HStack,
  NativeBaseProvider,
  StatusBar,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {SampleData2} from '../SampleData';
import WeatherLayoutHorizontalCard from './WeatherLayoutHorizontalCard';
import WeatherApi from '../WeatherApi.js';

const WeatherApiCall =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services' +
  '/timeline/Mumbai/2022-11-11/2022-11-11?unitGroup=metric&key=LR6KWXFQ5KUVDTCKEJAHVC5AS&contentType=json';

export default class WeatherHighlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      WeatherData: SampleData2,
    };
  }

  componentDidMount() {
    WeatherApi(WeatherApiCall)
      .then(res => {
        this.setState({WeatherData: res});
        // setWeatherData(JSON.stringify(res.days[4]));
      })
      .catch(val => console.log(val));
  }

  render() {
    return (
      <NativeBaseProvider>
        <StatusBar barStyle={'light-content'} backgroundColor="#28E2ce" />
        <VStack p="4" bgColor="#28E2ce" flex={1}>
          <Box h="20%" />
          <Box alignItems="center" mx="10" p="4" borderRadius={20}>
            <Text color="white">
              {this.state.WeatherData.days[0].conditions}
            </Text>
            <Text fontSize="9xl">
              {Math.floor(this.state.WeatherData.days[0].temp)}
              {'\u00b0'}
            </Text>
            <HStack justifyContent={'space-between'} w="35%">
              <Text>{this.state.WeatherData.days[0].windspeed} km/h</Text>
              <Text>{this.state.WeatherData.days[0].precip} %</Text>
            </HStack>
          </Box>
          <Box height="20%">
            <FlatList
              height={10}
              horizontal
              data={this.state.WeatherData.days}
              renderItem={WeatherLayoutHorizontalCard}
            />
          </Box>
        </VStack>
      </NativeBaseProvider>
    );
  }
}
