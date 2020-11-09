import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ModalComponent from '../../components/core/Modal';
import Header from '../../components/ui/Header';
import Ticket from '../../components/core/Ticket';
import SettingScreen from '../SettingScreen';
import LoadingComponent from '../../components/ui/Loading';

const TicketScreen = () => {
  const active = true;
  const [setting, setSetting] = React.useState(false);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  active: {
    flex: 1,
    marginTop: 5,
  },
  expired: {
    flex: 2,
  },
});

export default TicketScreen;
