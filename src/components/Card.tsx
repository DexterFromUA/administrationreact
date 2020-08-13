import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

type ICard = {
  title?: string;
  description?: string;
  onClick?: () => void;
  image?: boolean;
  style?: Object;
  children?: React.ReactNode;
};

const Card = ({title, description, onClick, image, style, children}: ICard) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View
        style={[
          {width: Dimensions.get('window').width - 30},
          styles.container,
          style,
        ]}>
        {image && <Text style={styles.image}>image</Text>}
        {!children && (
          <View style={styles.information}>
            <Text>{title}</Text>
            <Text>{description}</Text>
          </View>
        )}
        {children}
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
    borderColor: 'white',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 9,
    backgroundColor: 'white',
    elevation: 4,
    resizeMode: 'contain',
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
