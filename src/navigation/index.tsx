import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {authScreens, userScreens} from './routes';

const Stack = createStackNavigator();

interface INavComponent {
  isLoggedIn: boolean;
}

const NavComponent = ({isLoggedIn}: INavComponent) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {(isLoggedIn ? userScreens : authScreens).map(
          ({name, component, options = null}, idx) => (
            <Stack.Screen
              key={idx}
              name={name}
              component={component}
              options={options}
            />
          ),
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// всплытие js почитать (hosting)
NavComponent.defaultProps = {
  isLoggedIn: false,
};

export default NavComponent;
