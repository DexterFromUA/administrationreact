import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type ICard = {
  title: string;
  description?: string;
  onClick?: () => void;
};

const Card = ({title, description, onClick}: ICard) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.image}></View>
        <View style={styles.information}>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
    elevation: 4,
    height: 200,
  },
  image: {
    flex: 1,
    borderTopColor: 'black',
    borderLeftColor: 'black',
    borderRightColor: 'black',
    borderBottomColor: 'black',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    margin: 5,
  },
  information: {
    flex: 4,
  },
});

export default Card;
