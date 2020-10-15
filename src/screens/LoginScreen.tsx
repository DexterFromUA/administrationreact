import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';
import WebView from 'react-native-webview';

interface ILoginScreen {
  tempUri: string;
  loginUser: () => void;
  loginUserCallback: (url: string) => void;
}

const LoginScreen = ({tempUri, loginUser, loginUserCallback}: ILoginScreen) => {
  const {width, height} = Dimensions.get('window');

  React.useEffect(() => {
    loginUser();
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {tempUri && (
          <View>
            <WebView
              source={{uri: tempUri}}
              style={{width: width, height: height}}
              onLoadStart={(syntheticEvent) => {
                const {nativeEvent} = syntheticEvent;
                loginUserCallback(nativeEvent.url);
              }}
            />
          </View>
        )}
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
