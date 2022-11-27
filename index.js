/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppStart from './src/AppStart';

AppRegistry.registerComponent(appName, () => AppStart);
