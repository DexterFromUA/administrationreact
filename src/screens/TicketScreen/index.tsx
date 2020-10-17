import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';

import Ticket from '../../components/core/Ticket';

const TicketScreen = () => {
  const active = true;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.active}>{active && <Ticket active />}</View>
      <View style={styles.expired}>
        <ScrollView>
          <Ticket />
        </ScrollView>
      </View>
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
  },
  expired: {
    flex: 2,
  },
});

export default TicketScreen;
