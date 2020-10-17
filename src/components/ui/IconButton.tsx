import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

type IIconButton = {
  icon: any;
  onClick?: () => void;
  style?: Object;
};

const IconButton = ({icon, onClick, style}: IIconButton) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={[styles.container, style]}>{icon}</View>
    </TouchableOpacity>
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
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 9,
    backgroundColor: 'white',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconButton;
