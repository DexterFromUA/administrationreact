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
  loginUser,
  loginUserCallback,
  loading,
}: ILoginComponent) => {
  const {width, height} = Dimensions.get('window');

  React.useEffect(() => {
    loginUser();
  }, [loginUser]);

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
              // onLoadStart={(syntheticEvent) => {
              //   const {nativeEvent} = syntheticEvent;
              //   loginUserCallback(nativeEvent.url);
              // }}
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
