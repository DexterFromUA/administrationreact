import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import InformationScreen from '../screens/user/interfaceScreens/InformationScreen';
import UserHomeScreen from '../screens/user/UserHomeScreen';

const Stack = createStackNavigator();

const UserNewsRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={UserHomeScreen} />
      <Stack.Screen name="More" component={InformationScreen} />
    </Stack.Navigator>
  );
};

export default UserNewsRouter;
