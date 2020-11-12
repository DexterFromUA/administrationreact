import {bindActionCreators} from '@reduxjs/toolkit';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import Login from '../components/core/Login';
import {
  actionLoginUser,
  actionLoginUserWithCallback,
  actionGetResponseUri,
} from '../redux/actions/user';

const loginMapStateToProps = (state: Record<string, any>) => {
  return {
    tempUri: state.user.tempUri,
    loading: state.user.loading,
    codeUri: state.user.codeUri,
  };
};

const loginMapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      loginUser: actionLoginUser,
      loginUserCallback: actionLoginUserWithCallback,
      loginGetResponseUri: actionGetResponseUri,
    },
    dispatch,
  );
};

const ConnectedLogin = connect(
  loginMapStateToProps,
  loginMapDispatchToProps,
)(Login);

export default ConnectedLogin;
