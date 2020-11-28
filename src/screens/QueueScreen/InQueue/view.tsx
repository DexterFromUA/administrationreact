import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../../components/ui/Header';
import CardViewer from '../../../components/ui/CardViewer';
import IconButton from '../../../components/ui/IconButton';
import ModalComponent from '../../../components/core/Modal';
import LoadingComponent from '../../../components/ui/Loading';
import SettingScreen from '../../SettingScreen';

import {InQueueViewInterface} from './types';
import styles from './styles';

export default ({
  setSetting,
  friendsInQueue,
  setting,
  fullWidth,
}: InQueueViewInterface) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Queue"
        rightButton={() => setSetting(true)}
        buttonIcon={<Ionicons name="cog-outline" size={35} color="white" />}
      />
      <View style={styles.first}>
        <Text style={styles.info}>You are in the line at the moment</Text>
        <Text style={styles.description}>Your line up:</Text>
        <CardViewer
          text="@you"
          style={{width: fullWidth - 70, alignItems: 'center', height: 44}}
        />
        {friendsInQueue &&
          friendsInQueue.map((
            {name},
            idx, //TODO Type check
          ) => (
            <CardViewer
              key={idx}
              text={'@' + name}
              style={{width: fullWidth - 70, alignItems: 'center', height: 44}}
            />
          ))}
      </View>
      <View style={styles.second}>
        <IconButton
          icon={<Ionicons name="skull-outline" size={20} />}
          style={{
            width: 150,
            height: 44,
            backgroundColor: 'red',
            borderWidth: 0,
          }} //TODO: add alert
        />
      </View>
      <ModalComponent
        visible={setting}
        setVisible={() => setSetting(!setting)}
        component={
          <React.Suspense fallback={<LoadingComponent />}>
            <SettingScreen />
          </React.Suspense>
        }
      />
    </SafeAreaView>
  );
};
