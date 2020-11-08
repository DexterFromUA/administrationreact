import AdminHomeScreen from '../screens/admin/AdminHomeScreen';
import NewsRouter from './NewsRouter';
import SettingScreen from '../screens/SettingScreen';
import MediaScreen from '../screens/MediaScreen';
import QueueScreen from '../screens/QueueScreen';
import TableScreen from '../screens/TableScreen';
import TicketScreen from '../screens/TicketScreen';

const userScreens = [
  {
    name: 'UserNews',
    component: NewsRouter,
    options: {
      title: 'News',
    },
  },
  {
    name: 'UserQueue',
    component: QueueScreen,
    options: {
      title: 'Queue',
    },
  },
  {
    name: 'UserParty',
    component: TableScreen,
    options: {
      title: 'Table',
    },
  },
  {
    name: 'UserTickets',
    component: TicketScreen,
    options: {
      title: 'Tickets',
    },
  },
  {
    name: 'UserMedia',
    component: MediaScreen,
    options: {
      title: 'Media',
    },
  },
  // {
  //   name: 'UserSetting',
  //   component: SettingScreen,
  //   options: {
  //     title: 'Settings',
  //   },
  // },
];

const adminScreens = [
  {
    name: 'AdminHome',
    component: AdminHomeScreen,
  },
];

export {userScreens, adminScreens};
