import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  Button,
  Dimensions,
} from 'react-native';
import WebView from 'react-native-webview';

const LoginScreen = () => {
  const {width, height} = Dimensions.get('window');
  const [uri, setUri] = React.useState();

  const login = () => {
    fetch('http://192.168.1.4:8080/auth/instagram')
      .then((res) => setUri(res.url))
      .catch(() => console.log('ERROR !!!'));
  };

  const getCode = (url: string) => {
    let pos = url.indexOf('?code=');
    if (pos > 0) {
      let pos2 = url.indexOf('#_');
      let completed = url.slice(pos + 6, pos2);
      setUri(undefined);

      fetch(
        `http://192.168.1.4:8080/auth/instagram/callback?code=${completed}`,
        {
          method: 'POST',
        },
      ).then(() => {
        console.log('123');
        //loading controller here
      });
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {!uri && (
          <View>
            <Text>Hello</Text>
            <Button title="LOGIN" onPress={() => login()} />
          </View>
        )}
        {uri && (
          <View>
            <WebView
              source={{uri: uri}}
              style={{width: width, height: height}}
              onLoadStart={(syntheticEvent) => {
                const {nativeEvent} = syntheticEvent;
                getCode(nativeEvent.url);
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
