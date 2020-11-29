import React from 'react';
import {connect} from 'react-redux';

import {setSetting} from '../../redux/reducers/app';

import {SettingScreenInterface} from './types';
import ScreenView from './view';

export default connect(null, {setSetting})(
  ({setSetting}: SettingScreenInterface) => {
    const [visible, setVisible] = React.useState(false);

    return (
      <ScreenView
        visible={visible}
        setVisible={setVisible}
        setSetting={setSetting}
      />
    );
  },
);
