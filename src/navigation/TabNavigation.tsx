import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {tabRoutes} from './routes';

const {Navigator, Screen} = createBottomTabNavigator();

const Router = () => {
  const invited = false;

  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'News') {
            iconName = focused ? 'reader' : 'reader-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'cog' : 'cog-outline';
          } else if (route.name === 'Queue') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          } else if (route.name === 'Tickets') {
            iconName = focused ? 'pricetags' : 'pricetags-outline';
          } else if (route.name === 'Party') {
            iconName = focused ? 'wine' : 'wine-outline';
          } else if (route.name === 'Media') {
            iconName = focused ? 'images' : 'images-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'violet',
        inactiveTintColor: 'gray',
        showLabel: true,
        labelPosition: 'below-icon',
      }}>
      {tabRoutes()
        .filter((item) =>
          invited ? item.name !== 'Queue' : item.name !== 'Party',
        )
        .map(({name, component, options}, idx) => (
          <Screen
            key={idx}
            name={name}
            component={component}
            options={options}
          />
        ))}
    </Navigator>
  );
};

export default Router;
