/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import WeatherHome from './src/WeatherHome';

AppRegistry.registerComponent(appName, () => WeatherHome);
