import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';
import WebView from 'react-native-webview';

import Loading from '../ui/Loading';
import {ILoginComponent} from '../../constants/interfaces/LoginComponent';

const Login = ({
  tempUri,
  codeUri,
  loginUser,
  loginUserCallback,
  loading,
  loginGetResponseUri,
  close,
}: ILoginComponent) => {
  const {width, height} = Dimensions.get('window');

  React.useEffect(() => {
    if (codeUri === '') {
      loginUser();
    }

    if (codeUri !== '') {
      loginUserCallback(codeUri);
      close(false);
    }
  }, [loginUser, codeUri]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        {loading && <Loading />}
        {!loading && (
          <View>
            <WebView
              source={{uri: tempUri}}
              style={{flex: 0, width: width, height: height}}
              startInLoadingState={true}
              renderLoading={() => <Loading />}
              onLoadStart={(syntheticEvent) => {
                const {nativeEvent} = syntheticEvent;
                if (
                  nativeEvent.url.indexOf(
                    'https://about.instagram.com/?code=',
                  ) + 1
                )
                  loginGetResponseUri(nativeEvent.url);
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

export default Login;
