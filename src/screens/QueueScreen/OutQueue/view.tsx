import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../../components/ui/Header';
import CardViewer from '../../../components/ui/CardViewer';
import IconButton from '../../../components/ui/IconButton';
import ModalComponent from '../../../components/core/Modal';
import LoadingComponent from '../../../components/ui/Loading';
import SettingScreen from '../../SettingScreen';

import {OutQueueViewInterface} from './types';
import styles from './styles';

export default ({
  setting,
  setSetting,
  fullWidth,
  selectedFriends,
  queueRemoveFriend,
  setVisible,
  modalVisible,
  leftFriends,
  queueAddFriend,
}: OutQueueViewInterface) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Queue"
        rightButton={() => setSetting(true)}
        buttonIcon={<Ionicons name="cog-outline" size={35} color="white" />}
      />
      <View style={styles.first}>
        <Text style={styles.info}>Here you can take the queue for a table</Text>
        <Text style={styles.description}>
          Table size depends on the number of people!
        </Text>
        <CardViewer
          text="@username"
          style={{width: fullWidth - 70, alignItems: 'center', height: 44}}
        />
        {selectedFriends &&
          selectedFriends.map((
            {name, id},
            idx, //TODO Type check
          ) => (
            <View style={styles.element} key={idx}>
              <CardViewer
                text={name}
                style={{
                  width: fullWidth - 145,
                  alignItems: 'center',
                  height: 44,
                }}
              />
              <IconButton
                icon={<Ionicons name="sad-outline" size={20} />}
                onClick={() => queueRemoveFriend(id)}
                style={{
                  backgroundColor: 'red',
                  borderWidth: 0,
                  height: 44,
                }}
              />
            </View>
          ))}
        {selectedFriends.length < 5 && (
          <View style={{width: fullWidth - 40}}>
            <IconButton
              icon={<Ionicons name="people-outline" size={20} />}
              onClick={() => setVisible(true)}
            />
          </View>
        )}
      </View>
      <View style={styles.second}>
        <IconButton
          icon={
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Ionicons name="wine-outline" size={20} />
              <Ionicons name="pizza-outline" size={20} />
              <Ionicons name="musical-note-outline" size={20} />
              <Ionicons name="rocket-outline" size={20} />
              <Ionicons name="ice-cream-outline" size={20} />
              <Ionicons name="flame-outline" size={20} />
              <Ionicons name="flash-outline" size={20} />
            </View>
          }
          style={{
            width: fullWidth - 70,
            height: 44,
            backgroundColor: 'green',
            borderWidth: 0,
          }}
        />
      </View>
      <ModalComponent
        visible={modalVisible}
        setVisible={() => setVisible(!modalVisible)}
        list={leftFriends}
        selectFromList={queueAddFriend}
        listWithButton
        icon={<Ionicons name="magnet-outline" size={20} />}
      />
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
