import {Button, Alert} from 'react-native';
import React from 'react';

import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';
import AdminHomeScreen from '../screens/admin/AdminHomeScreen';
import UserHomeScreen from '../screens/user/UserHomeScreen';

const authScreens = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Main',
    component: MainScreen,
    options: {
      headerBackTitleVisible: false,
      headerLeft: () => (
        <Button onPress={() => Alert.alert('ALERT')} title="Logout" />
      ),
    },
  },
];

const userScreens = [
  {
    name: 'UserHome',
    component: UserHomeScreen,
  },
];

const adminScreens = [
  {
    name: 'AdminHome',
    component: AdminHomeScreen,
  },
];

export {userScreens, authScreens, adminScreens};
