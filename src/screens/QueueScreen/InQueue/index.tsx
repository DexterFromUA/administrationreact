import React from 'react';
import {Dimensions} from 'react-native';

import {InQueueInterface} from './types';
import ScreenView from './view';

export default ({friendsInQueue}: InQueueInterface) => {
  const [setting, setSetting] = React.useState(false);
  const fullWidth = Dimensions.get('window').width;

  return (
    <ScreenView
      setSetting={setSetting}
      friendsInQueue={friendsInQueue}
      setting={setting}
      fullWidth={fullWidth}
    />
  );
};
