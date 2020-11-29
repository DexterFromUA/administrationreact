import React from 'react';
import {StatusBar, Modal} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigation from '../../navigation/TabNavigation';
import SettingScreen from '../SettingScreen';

import {LaunchScreenViewInterface} from './types';

export default ({settingShowed, setSetting}: LaunchScreenViewInterface) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <TabNavigation />
        <Modal visible={settingShowed} animationType="slide">
          <SettingScreen />
        </Modal>
      </NavigationContainer>
    </>
  );
};
