import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ticketRoutes} from './routes';

const {Navigator, Screen} = createStackNavigator();

export default () => {
  return (
    <Navigator initialRouteName="QueueScreen">
      {ticketRoutes().map(({name, component, options}, idx) => (
        <Screen key={idx} name={name} component={component} options={options} />
      ))}
    </Navigator>
  );
};
