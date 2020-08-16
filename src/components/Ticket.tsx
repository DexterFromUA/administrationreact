import React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';

import Card from '../components/Card';
import ModalComponent from './Modal';
import TableHistory from './TableHistory';

const deviceWidth = Dimensions.get('window').width;

type ITicket = {
  active?: boolean;
};

const Ticket = ({active}: ITicket) => {
  const [visibleModal, setModal] = React.useState(false);

  return (
    <>
      <Card
        onClick={() => setModal(!visibleModal)}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[{width: deviceWidth - 70}, active && {shadowColor: 'purple'}]}>
        <View style={styles.container}>
          {active && (
            <View style={styles.activeContainer}>
              <View style={styles.activeInfo}>
                <Text>14 august 2020</Text>
                <Text>7th table</Text>
              </View>
              <View style={styles.activeFriends}>
                <Text>friends:</Text>
              </View>
            </View>
          )}

          {!active && (
            <View style={styles.expiredContainer}>
              <View>
                <Text style={{paddingBottom: 20}}>13 august 2020</Text>
                <Text>with 4 friends</Text>
              </View>
              <View style={styles.rightSide}>
                <Text>$750</Text>
              </View>
            </View>
          )}
        </View>
      </Card>
      <ModalComponent
        visible={visibleModal}
        setVisible={() => setModal(!visibleModal)}
        childrenStyle={{alignItems: 'center'}}>
        <TableHistory />
      </ModalComponent>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activeInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeFriends: {
    flex: 1,
    justifyContent: 'center',
  },
  expiredContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightSide: {
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
});

export default Ticket;
