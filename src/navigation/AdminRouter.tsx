import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {adminScreens} from './routes';

const Stack = createStackNavigator();

interface IScreen {
  name: string;
  component: any;
  options?: Object;
}

const AdminRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {adminScreens.map(({name, component, options}: IScreen, idx) => (
          <Stack.Screen
            key={idx}
            name={name}
            component={component}
            options={options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AdminRouter;
