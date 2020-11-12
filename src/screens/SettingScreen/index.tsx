import React from 'react';
import {SafeAreaView, Text, Pressable, View, StyleSheet} from 'react-native';

import LoginContainer from '../../containers/LoginContainer';
import ModalComponent from '../../components/core/Modal';

const SettingScreen = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.list}>
        <Pressable onPress={() => setVisible(true)}>
          <Text style={styles.listText}>Login via Instagram</Text>
        </Pressable>
      </View>
      <ModalComponent
        visible={visible}
        setVisible={() => setVisible(!visible)}
        component={<LoginContainer close={setVisible} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    paddingVertical: 20,
  },
  list: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  listText: {
    fontSize: 25,
  },
});

export default SettingScreen;
