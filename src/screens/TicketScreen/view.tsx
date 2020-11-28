import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../components/ui/Header';
import Ticket from '../../components/core/Ticket';
import ModalComponent from '../../components/core/Modal';
import LoadingComponent from '../../components/ui/Loading';
import SettingScreen from '../../screens/SettingScreen';

import {TicketScreenViewInterface} from './types';
import styles from './styles';

export default ({active, setting, setSetting}: TicketScreenViewInterface) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Tickets"
        rightButton={() => setSetting(true)}
        buttonIcon={<Ionicons name="cog-outline" size={35} color="white" />}
      />
      <View style={styles.active}>{active && <Ticket active />}</View>
      <View style={styles.expired}>
        <ScrollView>
          <Ticket />
        </ScrollView>
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
