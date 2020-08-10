import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type ICardViewer = {
  text: string;
  style?: Object;
};

const CardViewer = ({text, style}: ICardViewer) => {
  return (
    <View style={[style, styles.container]}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderStartColor: 'white',
    borderEndColor: 'white',
    borderBottomColor: 'white',
    borderTopColor: 'white',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 9,
    backgroundColor: 'white',
  },
});

export default CardViewer;
