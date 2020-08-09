import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {userScreens} from './routes';

const Tab = createBottomTabNavigator();

interface IScreen {
  name: string;
  component: any;
  options?: Object;
}

const UserRouter = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'UserNews') {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (route.name === 'UserSetting') {
              iconName = focused ? 'cog' : 'cog-outline';
            } else if (route.name === 'UserQueue') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'UserTickets') {
              iconName = focused ? 'pricetags' : 'pricetags-outline';
            } else if (route.name === 'UserParty') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'UserMedia') {
              iconName = focused ? 'images' : 'images-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        {userScreens.map(({name, component, options}: IScreen, idx) => (
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

export default UserRouter;
