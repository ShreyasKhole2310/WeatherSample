import React from 'react';

const SampleData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Aafreen Khan',
    timeStamp: '12:47 PM',
    recentText: 'Good Day!',
    avatarUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Sujitha Mathur',
    timeStamp: '11:11 PM',
    recentText: 'Cheer up, there!',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Anci Barroco',
    timeStamp: '6:22 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
  },
  {
    id: '68694a0f-3da1-431f-bd56-142371e29d72',
    fullName: 'Aniket Kumar',
    timeStamp: '8:56 PM',
    recentText: 'All the best',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  },
  {
    id: '28694a0f-3da1-471f-bd96-142456e29d72',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText: 'I will call today.',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  },
];

export const SampleData2 = {
  queryCost: 1,
  latitude: 18.5042,
  longitude: 73.8529,
  resolvedAddress: 'Pune, MH, India',
  address: 'Pune',
  timezone: 'Asia/Kolkata',
  tzoffset: 5.5,
  days: [
    {
      datetime: '2022-11-07',
      datetimeEpoch: 1667759400,
      tempmax: 27.8,
      tempmin: 18.3,
      temp: 22.6,
      feelslikemax: 26.9,
      feelslikemin: 18.3,
      feelslike: 22.5,
      dew: 8.8,
      humidity: 42.1,
      precip: 0.0,
      precipprob: 0.0,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 15.8,
      windspeed: 11.9,
      winddir: 86.2,
      pressure: 1015.2,
      cloudcover: 86.5,
      visibility: 24.1,
      solarradiation: 221.0,
      solarenergy: 19.0,
      uvindex: 8.0,
      severerisk: 10.0,
      sunrise: '06:36:55',
      sunriseEpoch: 1667783215,
      sunset: '17:59:22',
      sunsetEpoch: 1667824162,
      moonphase: 0.49,
      conditions: 'Partially cloudy',
      description: 'Partly cloudy throughout the day.',
      icon: 'partly-cloudy-day',
      stations: ['remote'],
      source: 'comb',
    },
    {
      datetime: '2022-11-08',
      datetimeEpoch: 1667845800,
      tempmax: 28.3,
      tempmin: 18.1,
      temp: 22.9,
      feelslikemax: 27.4,
      feelslikemin: 18.1,
      feelslike: 22.7,
      dew: 10.3,
      humidity: 45.9,
      precip: 0.0,
      precipprob: 0.0,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 18.0,
      windspeed: 12.6,
      winddir: 94.3,
      pressure: 1014.6,
      cloudcover: 22.4,
      visibility: 24.1,
      solarradiation: 243.3,
      solarenergy: 21.1,
      uvindex: 9.0,
      severerisk: 10.0,
      sunrise: '06:37:24',
      sunriseEpoch: 1667869644,
      sunset: '17:59:01',
      sunsetEpoch: 1667910541,
      moonphase: 0.5,
      conditions: 'Partially cloudy',
      description: 'Partly cloudy throughout the day.',
      icon: 'partly-cloudy-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-09',
      datetimeEpoch: 1667932200,
      tempmax: 28.2,
      tempmin: 18.4,
      temp: 23.0,
      feelslikemax: 27.4,
      feelslikemin: 18.4,
      feelslike: 22.8,
      dew: 10.8,
      humidity: 47.1,
      precip: 0.0,
      precipprob: 0.0,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 15.8,
      windspeed: 11.9,
      winddir: 91.9,
      pressure: 1014.3,
      cloudcover: 17.8,
      visibility: 24.1,
      solarradiation: 241.8,
      solarenergy: 20.9,
      uvindex: 9.0,
      severerisk: 10.0,
      sunrise: '06:37:53',
      sunriseEpoch: 1667956073,
      sunset: '17:58:40',
      sunsetEpoch: 1667996920,
      moonphase: 0.51,
      conditions: 'Clear',
      description: 'Clear conditions throughout the day.',
      icon: 'clear-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-10',
      datetimeEpoch: 1668018600,
      tempmax: 28.0,
      tempmin: 17.6,
      temp: 22.1,
      feelslikemax: 27.0,
      feelslikemin: 17.6,
      feelslike: 21.9,
      dew: 9.1,
      humidity: 44.5,
      precip: 0.0,
      precipprob: 0.0,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 28.8,
      windspeed: 21.6,
      winddir: 80.0,
      pressure: 1014.7,
      cloudcover: 2.9,
      visibility: 24.1,
      solarradiation: 244.2,
      solarenergy: 21.0,
      uvindex: 9.0,
      severerisk: 10.0,
      sunrise: '06:38:24',
      sunriseEpoch: 1668042504,
      sunset: '17:58:21',
      sunsetEpoch: 1668083301,
      moonphase: 0.53,
      conditions: 'Clear',
      description: 'Clear conditions throughout the day.',
      icon: 'clear-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-11',
      datetimeEpoch: 1668105000,
      tempmax: 28.3,
      tempmin: 16.7,
      temp: 21.8,
      feelslikemax: 27.4,
      feelslikemin: 16.7,
      feelslike: 21.6,
      dew: 10.6,
      humidity: 50.2,
      precip: 0.0,
      precipprob: 0.0,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 36.0,
      windspeed: 25.2,
      winddir: 79.3,
      pressure: 1014.6,
      cloudcover: 49.3,
      visibility: 24.1,
      solarradiation: 236.3,
      solarenergy: 20.5,
      uvindex: 9.0,
      severerisk: 10.0,
      sunrise: '06:38:54',
      sunriseEpoch: 1668128934,
      sunset: '17:58:03',
      sunsetEpoch: 1668169683,
      moonphase: 0.54,
      conditions: 'Partially cloudy',
      description: 'Clearing in the afternoon.',
      icon: 'partly-cloudy-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-12',
      datetimeEpoch: 1668191400,
      tempmax: 27.9,
      tempmin: 16.8,
      temp: 21.4,
      feelslikemax: 26.9,
      feelslikemin: 16.8,
      feelslike: 21.3,
      dew: 10.3,
      humidity: 50.7,
      precip: 0.0,
      precipprob: 0.0,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 37.4,
      windspeed: 19.4,
      winddir: 74.5,
      pressure: 1013.7,
      cloudcover: 84.9,
      visibility: 24.1,
      solarradiation: 199.6,
      solarenergy: 17.5,
      uvindex: 6.0,
      severerisk: 10.0,
      sunrise: '06:39:25',
      sunriseEpoch: 1668215365,
      sunset: '17:57:47',
      sunsetEpoch: 1668256067,
      moonphase: 0.58,
      conditions: 'Partially cloudy',
      description: 'Partly cloudy throughout the day.',
      icon: 'partly-cloudy-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-13',
      datetimeEpoch: 1668277800,
      tempmax: 28.0,
      tempmin: 16.8,
      temp: 21.7,
      feelslikemax: 27.0,
      feelslikemin: 16.8,
      feelslike: 21.6,
      dew: 9.5,
      humidity: 47.2,
      precip: 0.0,
      precipprob: 0.0,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 20.9,
      windspeed: 15.5,
      winddir: 83.2,
      pressure: 1012.2,
      cloudcover: 53.2,
      visibility: 24.1,
      solarradiation: 226.3,
      solarenergy: 19.5,
      uvindex: 8.0,
      severerisk: 10.0,
      sunrise: '06:39:57',
      sunriseEpoch: 1668301797,
      sunset: '17:57:31',
      sunsetEpoch: 1668342451,
      moonphase: 0.62,
      conditions: 'Partially cloudy',
      description: 'Becoming cloudy in the afternoon.',
      icon: 'partly-cloudy-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-14',
      datetimeEpoch: 1668364200,
      tempmax: 28.5,
      tempmin: 16.9,
      temp: 21.9,
      feelslikemax: 27.3,
      feelslikemin: 16.9,
      feelslike: 21.8,
      dew: 8.9,
      humidity: 44.8,
      precip: 0.0,
      precipprob: 14.3,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 20.2,
      windspeed: 14.8,
      winddir: 77.6,
      pressure: 1011.8,
      cloudcover: 20.1,
      visibility: 24.1,
      solarradiation: 241.9,
      solarenergy: 20.7,
      uvindex: 8.0,
      severerisk: 10.0,
      sunrise: '06:40:29',
      sunriseEpoch: 1668388229,
      sunset: '17:57:17',
      sunsetEpoch: 1668428837,
      moonphase: 0.66,
      conditions: 'Partially cloudy',
      description: 'Partly cloudy throughout the day.',
      icon: 'partly-cloudy-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-15',
      datetimeEpoch: 1668450600,
      tempmax: 28.6,
      tempmin: 17.4,
      temp: 22.3,
      feelslikemax: 28.3,
      feelslikemin: 17.4,
      feelslike: 22.3,
      dew: 11.4,
      humidity: 50.9,
      precip: 0.0,
      precipprob: 14.3,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 26.6,
      windspeed: 19.8,
      winddir: 80.6,
      pressure: 1012.5,
      cloudcover: 19.8,
      visibility: 24.1,
      solarradiation: 231.0,
      solarenergy: 19.8,
      uvindex: 8.0,
      severerisk: 10.0,
      sunrise: '06:41:02',
      sunriseEpoch: 1668474662,
      sunset: '17:57:04',
      sunsetEpoch: 1668515224,
      moonphase: 0.7,
      conditions: 'Clear',
      description: 'Clear conditions throughout the day.',
      icon: 'clear-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-16',
      datetimeEpoch: 1668537000,
      tempmax: 29.3,
      tempmin: 17.3,
      temp: 22.3,
      feelslikemax: 27.8,
      feelslikemin: 17.3,
      feelslike: 22.1,
      dew: 8.1,
      humidity: 41.5,
      precip: 0.0,
      precipprob: 9.5,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 23.0,
      windspeed: 16.9,
      winddir: 86.4,
      pressure: 1012.5,
      cloudcover: 5.0,
      visibility: 24.1,
      solarradiation: 240.5,
      solarenergy: 20.7,
      uvindex: 8.0,
      severerisk: 10.0,
      sunrise: '06:41:35',
      sunriseEpoch: 1668561095,
      sunset: '17:56:53',
      sunsetEpoch: 1668601613,
      moonphase: 0.75,
      conditions: 'Clear',
      description: 'Clear conditions throughout the day.',
      icon: 'clear-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-17',
      datetimeEpoch: 1668623400,
      tempmax: 28.3,
      tempmin: 16.9,
      temp: 22.0,
      feelslikemax: 27.0,
      feelslikemin: 16.9,
      feelslike: 21.8,
      dew: 6.6,
      humidity: 38.2,
      precip: 0.0,
      precipprob: 4.8,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 19.1,
      windspeed: 14.0,
      winddir: 96.9,
      pressure: 1012.1,
      cloudcover: 59.1,
      visibility: 24.1,
      solarradiation: 220.3,
      solarenergy: 18.9,
      uvindex: 8.0,
      severerisk: 10.0,
      sunrise: '06:42:08',
      sunriseEpoch: 1668647528,
      sunset: '17:56:42',
      sunsetEpoch: 1668688002,
      moonphase: 0.8,
      conditions: 'Partially cloudy',
      description: 'Becoming cloudy in the afternoon.',
      icon: 'partly-cloudy-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-18',
      datetimeEpoch: 1668709800,
      tempmax: 28.5,
      tempmin: 17.0,
      temp: 22.1,
      feelslikemax: 27.1,
      feelslikemin: 17.0,
      feelslike: 22.0,
      dew: 5.8,
      humidity: 35.4,
      precip: 0.0,
      precipprob: 9.5,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 20.2,
      windspeed: 14.0,
      winddir: 96.6,
      pressure: 1012.3,
      cloudcover: 26.1,
      visibility: 24.1,
      solarradiation: 239.0,
      solarenergy: 20.7,
      uvindex: 8.0,
      severerisk: 10.0,
      sunrise: '06:42:42',
      sunriseEpoch: 1668733962,
      sunset: '17:56:33',
      sunsetEpoch: 1668774393,
      moonphase: 0.85,
      conditions: 'Partially cloudy',
      description: 'Partly cloudy throughout the day.',
      icon: 'partly-cloudy-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-19',
      datetimeEpoch: 1668796200,
      tempmax: 28.4,
      tempmin: 17.3,
      temp: 22.2,
      feelslikemax: 27.1,
      feelslikemin: 17.3,
      feelslike: 22.0,
      dew: 6.5,
      humidity: 36.8,
      precip: 0.0,
      precipprob: 9.5,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 21.2,
      windspeed: 13.3,
      winddir: 87.1,
      pressure: 1012.1,
      cloudcover: 20.4,
      visibility: 24.1,
      solarradiation: 237.4,
      solarenergy: 20.4,
      uvindex: 8.0,
      severerisk: 10.0,
      sunrise: '06:43:16',
      sunriseEpoch: 1668820396,
      sunset: '17:56:25',
      sunsetEpoch: 1668860785,
      moonphase: 0.89,
      conditions: 'Partially cloudy',
      description: 'Partly cloudy throughout the day.',
      icon: 'partly-cloudy-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-20',
      datetimeEpoch: 1668882600,
      tempmax: 28.6,
      tempmin: 17.3,
      temp: 21.9,
      feelslikemax: 27.3,
      feelslikemin: 17.3,
      feelslike: 21.8,
      dew: 7.3,
      humidity: 39.8,
      precip: 0.0,
      precipprob: 4.8,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 24.5,
      windspeed: 20.5,
      winddir: 51.2,
      pressure: 1011.9,
      cloudcover: 87.6,
      visibility: 24.1,
      solarradiation: 223.8,
      solarenergy: 19.5,
      uvindex: 8.0,
      severerisk: 10.0,
      sunrise: '06:43:51',
      sunriseEpoch: 1668906831,
      sunset: '17:56:19',
      sunsetEpoch: 1668947179,
      moonphase: 0.93,
      conditions: 'Partially cloudy',
      description: 'Partly cloudy throughout the day.',
      icon: 'partly-cloudy-day',
      stations: null,
      source: 'fcst',
    },
    {
      datetime: '2022-11-21',
      datetimeEpoch: 1668969000,
      tempmax: 27.8,
      tempmin: 16.4,
      temp: 21.1,
      feelslikemax: 26.6,
      feelslikemin: 16.4,
      feelslike: 21.0,
      dew: 6.0,
      humidity: 38.6,
      precip: 0.0,
      precipprob: 9.5,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 18.4,
      windspeed: 14.8,
      winddir: 56.6,
      pressure: 1011.6,
      cloudcover: 80.1,
      visibility: 24.1,
      solarradiation: 213.8,
      solarenergy: 18.1,
      uvindex: 7.0,
      severerisk: 10.0,
      sunrise: '06:44:26',
      sunriseEpoch: 1668993266,
      sunset: '17:56:14',
      sunsetEpoch: 1669033574,
      moonphase: 0.97,
      conditions: 'Partially cloudy',
      description: 'Partly cloudy throughout the day.',
      icon: 'partly-cloudy-day',
      stations: null,
      source: 'fcst',
    },
  ],
};

export default SampleData;
