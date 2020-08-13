import React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';

import Card from '../components/Card';
import ModalComponent from './Modal';

const deviceWidth = Dimensions.get('window').width;

type ITicket = {
  active?: boolean;
};

const Ticket = ({active}: ITicket) => {
  const [visibleModal, setModal] = React.useState(false);

  return (
    <View style={styles.container}>
      <Card
        onClick={() => setModal(!visibleModal)}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[{width: deviceWidth - 70}, active && {shadowColor: 'purple'}]}>
        {active && (
          <View style={styles.cardContainer}>
            <View>
              <Text>Ticket for:</Text>
              <Text style={styles.friend}>@you (owner)</Text>
              <Text style={styles.friend}>@friend1</Text>
              <Text style={styles.friend}>@friend2</Text>
              <Text style={styles.friend}>@friend3</Text>
              <Text style={styles.friend}>@friend4</Text>
              <Text style={styles.friend}>@friend5</Text>
            </View>
            <View style={styles.activeRightSide}>
              <View>
                <Text style={[styles.additionalInfo, {paddingBottom: 5}]}>
                  13 august 2020
                </Text>
                <Text style={styles.additionalInfo}>Table number 7</Text>
              </View>
              <View>
                <Text style={styles.qrCodeTitle}>Tap for QR Code</Text>
              </View>
            </View>
          </View>
        )}
        {!active && (
          <View style={styles.cardContainer}>
            <View>
              <Text style={{paddingBottom: 20}}>13 august 2020</Text>
              <Text>you with 4 friends</Text>
            </View>
            <View style={styles.rightSide}>
              <Text>$750</Text>
            </View>
          </View>
        )}
      </Card>
      <ModalComponent
        visible={visibleModal}
        setVisible={() => setModal(!visibleModal)}
        childrenStyle={{alignItems: 'center'}}>
        <Text>TEST MODAL</Text>
      </ModalComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightSide: {
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  friend: {
    paddingBottom: 7,
  },
  activeRightSide: {
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  qrCodeTitle: {
    fontSize: 28,
    paddingTop: 30,
    color: 'purple',
  },
  additionalInfo: {
    fontSize: 18,
  },
});

export default Ticket;
