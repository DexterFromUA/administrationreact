import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

type NavType = 'stack' | 'tab';

interface NavigationHookInterface {
  screens: Record<string, any>[];
  options?: Record<string, any>;
  type?: NavType;
}

export default ({
  screens,
  options,
  type = 'stack',
}: NavigationHookInterface) => {
  if (type === 'tab') {
    const {Navigator, Screen} = createBottomTabNavigator();
    return (
      <Navigator tabBarOptions={options}>
        {screens.map(({name, component, options}, idx) => (
          <Screen
            key={idx}
            name={name}
            component={component}
            options={options}
          />
        ))}
      </Navigator>
    );
  }

  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator {...options}>
      {screens.map(({name, component, options}, idx) => (
        <Screen key={idx} name={name} component={component} options={options} />
      ))}
    </Navigator>
  );
};
