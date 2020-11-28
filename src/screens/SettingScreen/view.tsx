import React from 'react';
import {SafeAreaView, View, Text, Pressable} from 'react-native';

import ModalComponent from '../../components/core/Modal';
import LoginContainer from '../../containers/LoginContainer';

import {SettingScreenViewInterface} from './types';
import styles from './styles';

export default ({visible, setVisible}: SettingScreenViewInterface) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.list}>
        <Pressable onPress={() => setVisible(true)}>
          <Text style={styles.listText}>Login via Instagram</Text>
        </Pressable>
      </View>
      <View style={styles.list}>
        <Pressable onPress={() => setVisible(true)}>
          <Text style={styles.listText}>Login via Google</Text>
        </Pressable>
      </View>
      <ModalComponent
        visible={visible}
        setVisible={() => setVisible(!visible)}
        component={<LoginContainer close={setVisible} />}
      />
    </SafeAreaView>
  );
};
