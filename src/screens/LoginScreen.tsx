import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button, StatusBar} from 'react-native';

const LoginScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>Hello</Text>
        <Button
          title="Login with Apple ID"
          onPress={() => console.log('test')}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
