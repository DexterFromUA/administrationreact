import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface IHeader {
  title: string;
  buttonTitle?: string;
  buttonIcon?: React.ReactElement;
  rightButton?: () => void;
  containerStyle?: any;
}

const Header = ({
  title,
  rightButton,
  buttonTitle,
  buttonIcon,
  containerStyle,
}: IHeader) => (
  <View
    style={
      buttonTitle || buttonIcon
        ? [styles.container, containerStyle]
        : [styles.container, styles.containerAlone, containerStyle]
    }>
    <Text style={buttonTitle || buttonIcon ? styles.text : styles.textAlone}>
      {title}
    </Text>
    {(buttonTitle || buttonIcon) && (
      <TouchableOpacity onPress={rightButton}>
        {(buttonIcon && <View style={styles.icon}>{buttonIcon}</View>) || (
          <Text style={styles.buttonTitle}>{buttonTitle}</Text>
        )}
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 300,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'space-between',
    shadowColor: 'grey',
    shadowRadius: 30,
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 6,
      height: 10,
    },
    alignItems: 'center',
  },
  text: {
    paddingVertical: 15,
    paddingLeft: 25,
    fontSize: 25,
  },
  containerAlone: {
    justifyContent: 'center',
  },
  textAlone: {
    paddingVertical: 15,
    fontSize: 25,
  },
  buttonTitle: {
    paddingRight: 40,
    fontSize: 20,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: 'grey',
  },
});

export default Header;
