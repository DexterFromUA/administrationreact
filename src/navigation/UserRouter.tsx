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

            if (route.name === 'UserHome') {
              iconName = focused ? 'happy' : 'happy-outline';
            } else if (route.name === 'UserSetting') {
              iconName = focused ? 'cog' : 'cog-outline';
            }

            return <Ionicons name={iconName} size={size + 10} color={color} />;
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
