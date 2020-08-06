import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const UserHomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>USER HOME SCREEN</Text>
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

export default UserHomeScreen;
