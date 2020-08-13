import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';

import Ticket from '../../components/Ticket';

const UserSettingScreen = () => {
  const active = true;
  return (
    <SafeAreaView style={styles.container}>
      {active && <Ticket active />}
      <View style={styles.history}>
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
  history: {
    flex: 3,
  },
});

export default UserSettingScreen;
