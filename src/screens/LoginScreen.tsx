import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button, StatusBar} from 'react-native';

interface ILoginScreen {
  navigation: any;
}

const LoginScreen = ({navigation}: ILoginScreen) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>Hello</Text>
        <Button
          title="Login with Apple ID"
          onPress={() => navigation.navigate('Main')}
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
