/**
 * @format
 */
//open "rndebugger://set-debugger-loc?host=localhost&port=8081"

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
