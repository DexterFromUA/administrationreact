import React from 'react';
import {connect} from 'react-redux';

import {setSetting} from '../../redux/reducers/app';

import ScreenView from './view';

const mapStateToProps = ({app}: Record<string, any>) => ({
  settingShowed: app.settingShowed,
});

export default connect(mapStateToProps, {setSetting})(
  ({settingShowed, setSetting}) => {
    return <ScreenView settingShowed={settingShowed} setSetting={setSetting} />;
  },
);
