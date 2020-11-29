import React from 'react';
import {Button} from 'react-native';

import NewsNavigation from './NewsNavigation';
import QueueNavigation from './QueueNavigation';
import TicketNavigation from './TicketNavigation';

import MediaScreen from '../screens/MediaScreen';
import QueueScreen from '../screens/QueueScreen';
import TableScreen from '../screens/TableScreen';
import TicketScreen from '../screens/TicketScreen';
import NewsScreen from '../screens/NewsScreen';
import InformationScreen from '../screens/NewsScreen/InformationScreen';

const tabRoutes = () => [
  {
    name: 'News',
    component: NewsNavigation,
    options: {
      title: 'News',
    },
  },
  {
    name: 'Queue',
    component: QueueNavigation,
    options: {
      title: 'Queue',
    },
  },
  {
    name: 'Party',
    component: TableScreen,
    options: {
      title: 'Table',
    },
  },
  {
    name: 'Tickets',
    component: TicketNavigation,
    options: {
      title: 'Tickets',
    },
  },
  {
    name: 'Media',
    component: MediaScreen,
    options: {
      title: 'Media',
    },
  },
];

const newsRoutes = () => [
  {
    name: 'NewsScreen',
    component: NewsScreen,
    options: {
      title: 'News',
      headerRight: () => {
        return (
          <Button title="Settings" onPress={() => console.log('touched')} />
        );
      },
    },
  },
  {
    name: 'InformationScreen',
    component: InformationScreen,
    options: {
      headerBackTitle: 'Done',
      headerBackImage: () => null,
      headerBackTitleStyle: {
        marginLeft: 20,
      },
      headerRight: () => {
        return (
          <Button title="Settings" onPress={() => console.log('touched')} />
        );
      },
    },
  },
];

const queueRoutes = () => [
  {
    name: 'QueueScreen',
    component: QueueScreen,
    options: {
      title: 'Queue',
      headerRight: () => {
        return (
          <Button title="Settings" onPress={() => console.log('touched')} />
        );
      },
    },
  },
];

const ticketRoutes = () => [
  {
    name: 'TicketScreen',
    component: TicketScreen,
    options: {
      title: 'Ticket',
      headerRight: () => {
        return (
          <Button title="Settings" onPress={() => console.log('touched')} />
        );
      },
    },
  },
];

export {tabRoutes, newsRoutes, queueRoutes, ticketRoutes};
