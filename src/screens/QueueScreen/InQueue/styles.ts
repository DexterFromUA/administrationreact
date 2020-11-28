import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  info: {
    paddingVertical: 40,
    fontSize: 18,
  },
  element: {
    flexDirection: 'row',
  },
  first: {
    flex: 9,
    alignItems: 'center',
  },
  second: {
    flex: 1,
  },
  description: {
    alignSelf: 'flex-start',
    fontSize: 16,
    paddingBottom: 10,
    paddingLeft: 15,
  },
});

export default styles;
