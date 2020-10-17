import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const TableScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>USER TABLE SCREEN</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TableScreen;
