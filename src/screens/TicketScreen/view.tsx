import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

import Ticket from '../../components/core/Ticket';

import {TicketScreenViewInterface} from './types';
import styles from './styles';

export default ({active}: TicketScreenViewInterface) => {
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
