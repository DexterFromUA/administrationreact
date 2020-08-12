import React from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

type IModalComponent = {
  visible: boolean;
  setVisible: () => void;
  list?: Object[] | undefined;
  selectFromList: (id: number) => void;
  listWithButton?: boolean;
  style?: Object;
  icon?: any;
};

const ModalComponent = ({
  visible,
  setVisible,
  list,
  selectFromList,
  listWithButton,
  style,
  icon,
}: IModalComponent) => {
  const closeHandle = (id: number) => {
    selectFromList(id);
    setVisible();
  };

  return (
    <>
      {visible && <StatusBar barStyle="light-content" />}
      <Modal
        supportedOrientations={['portrait']}
        visible={visible}
        animationType="slide"
        transparent={false}
        presentationStyle="pageSheet">
        <View style={styles.container}>
          <View style={styles.doneButton}>
            <Button title="Done" onPress={setVisible} />
          </View>
          <ScrollView style={styles.scrollView}>
            {list &&
              list.map((item, idx) => (
                <View key={idx} style={listWithButton && styles.listWithButton}>
                  <View
                    style={[
                      styles.list,
                      {
                        width:
                          Dimensions.get('window').width -
                          (listWithButton ? 150 : 100),
                      },
                    ]}>
                    <Text style={styles.listText}>{item.name}</Text>
                  </View>
                  {listWithButton && (
                    <TouchableOpacity onPress={() => closeHandle(item.id)}>
                      <View style={[styles.button, style]}>{icon}</View>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            {!list.length && (
              <View style={styles.empty}>
                <Text>Have no more :(</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  listWithButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 4,
  },
  listText: {
    paddingVertical: 15,
  },
  button: {
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
  doneButton: {
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  scrollView: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalComponent;
