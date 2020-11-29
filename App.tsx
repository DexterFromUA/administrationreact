/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';

import store from './src/redux/store';
import LaunchScreen from './src/screens/LaunchScreen';

const App = () => {
  return (
    <Provider store={store}>
      <LaunchScreen />
    </Provider>
  );
};

export default App;
