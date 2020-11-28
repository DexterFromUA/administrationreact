import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import {InformationScreenViewInterface} from './types';
import styles from './styles';

export default ({full}: InformationScreenViewInterface) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.full}>{full}</Text>
      </View>
    </ScrollView>
  );
};
