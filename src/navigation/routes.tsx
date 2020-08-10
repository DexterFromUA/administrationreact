import {Button, Alert} from 'react-native';
import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import AdminHomeScreen from '../screens/admin/AdminHomeScreen';
import UserNewsRouter from '../navigation/UserNewsRouter';
import UserSettingScreen from '../screens/user/UserSettingScreen';
import UserMediaScreen from '../screens/user/UserMediaScreen';
import UserQueueScreen from '../screens/user/UserQueueScreen';
import UserTableScreen from '../screens/user/UserTableScreen';
import UserTicketsScreen from '../screens/user/UserTicketsScreen';

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
    name: 'UserNews',
    component: UserNewsRouter,
    options: {
      title: 'News',
    },
  },
  {
    name: 'UserQueue',
    component: UserQueueScreen,
    options: {
      title: 'Queue',
    },
  },
  {
    name: 'UserParty',
    component: UserTableScreen,
    options: {
      title: 'Table',
    },
  },
  {
    name: 'UserTickets',
    component: UserTicketsScreen,
    options: {
      title: 'Tickets',
    },
  },
  {
    name: 'UserMedia',
    component: UserMediaScreen,
    options: {
      title: 'Media',
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
