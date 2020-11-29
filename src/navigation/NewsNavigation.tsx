import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {newsRoutes} from './routes';

const {Navigator, Screen} = createStackNavigator();

export default () => {
  return (
    <Navigator initialRouteName="NewsScreen" mode="modal">
      {newsRoutes().map(({name, component, options}, idx) => (
        <Screen key={idx} name={name} component={component} options={options} />
      ))}
    </Navigator>
  );
};
