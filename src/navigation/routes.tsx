import {Button, Alert} from 'react-native';
import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import AdminHomeScreen from '../screens/admin/AdminHomeScreen';
import UserHomeScreen from '../screens/user/UserHomeScreen';
import UserSettingScreen from '../screens/user/UserSettingScreen';

const authScreens = [
  {
    name: 'Login',
    component: LoginScreen,
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
    options: {
      title: 'Home',
    },
  },
  {
    name: 'UserSetting',
    component: UserSettingScreen,
    options: {
      title: 'Settings',
    },
  },
];

const adminScreens = [
  {
    name: 'AdminHome',
    component: AdminHomeScreen,
  },
];

export {userScreens, authScreens, adminScreens};
