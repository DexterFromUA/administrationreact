import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const ErrorScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LOADING SCREEN</Text>
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

export default ErrorScreen;
