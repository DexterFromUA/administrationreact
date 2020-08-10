import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const InformationScreen = (props: any) => {
  const {title, full} = props.route.params;

  React.useEffect(() => {
    props.navigation.setOptions({
      title: title,
    });
  }, [props.navigation, title]);

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
