import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {userScreens} from './routes';
import {getItems} from '../actions/actionCreators/newsCreator';

const Tab = createBottomTabNavigator();

type IUserRouter = {
  invited: boolean;
  getNews: () => Object;
};

interface IScreen {
  name: string;
  component: any;
  options?: Object;
}

const UserRouter = ({invited, getNews}: IUserRouter) => {
  React.useEffect(() => {
    getNews();
  });

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
              iconName = focused ? 'wine' : 'wine-outline';
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
        {userScreens
          .filter((item) =>
            invited ? item.name !== 'UserQueue' : item.name !== 'UserParty',
          )
          .map(({name, component, options}: IScreen, idx) => (
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

const mapStateToProps = (state: Object) => {
  return {
    invited: state.invited,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      getNews: getItems,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRouter);
