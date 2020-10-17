import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import {InformationScreenInterface} from '../../constants/interfaces/UserHomeScreen';

const InformationScreen = ({route, navigation}: InformationScreenInterface) => {
  const {title, full} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.full}>{full}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  full: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 10,
  },
});

export default InformationScreen;
