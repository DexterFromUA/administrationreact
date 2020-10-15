import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {userScreens} from './routes';

const Tab = createBottomTabNavigator();

const Router = () => {
  const invited = false;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';

            if (route.name === 'UserNews') {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (route.name === 'UserSetting') {
              iconName = focused ? 'cog' : 'cog-outline';
            } else if (route.name === 'UserQueue') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'UserTickets') {
              iconName = focused ? 'pricetags' : 'pricetags-outline';
            } else if (route.name === 'UserParty') {
              iconName = focused ? 'wine' : 'wine-outline';
            } else if (route.name === 'UserMedia') {
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
        {userScreens
          .filter((item) =>
            invited ? item.name !== 'UserQueue' : item.name !== 'UserParty',
          )
          .map(({name, component, options}, idx) => (
            <Tab.Screen
              key={idx}
              name={name}
              component={component}
              options={options}
            />
          ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
