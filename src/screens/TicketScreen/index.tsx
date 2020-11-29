import React from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {setSetting} from '../../redux/reducers/app';

import {TicketScreenInterface} from './types';
import ScreenView from './view';

export default connect(null, {setSetting})(
  ({setSetting}: TicketScreenInterface) => {
    const {setOptions} = useNavigation();
    const active = true;

    React.useEffect(() => {
      setOptions({
        headerRight: () => {
          return <Button title="Settings" onPress={() => setSetting()} />;
        },
      });
    }, []);

    return <ScreenView active={active} />;
  },
);
