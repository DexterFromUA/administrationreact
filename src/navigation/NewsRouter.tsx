import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import InformationScreen from '../screens/NewsScreen/InformationScreen';
import NewsScreen from '../screens/NewsScreen';

const Stack = createStackNavigator();

const NewsRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="More" component={InformationScreen} />
    </Stack.Navigator>
  );
};

export default NewsRouter;
