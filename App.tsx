/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';

import store from './src/utils/store';
import Loading from './src/components/Loading';
import ErrorScreen from './src/screens/ErrorScreen';
import LoginScreen from './src/screens/LoginScreen';
import AdminRouter from './src/navigation/AdminRouter';
import UserRouter from './src/navigation/UserRouter';

const App = () => {
  const [user, setUser] = React.useState({
    name: 'test',
    role: 'user',
    token: '1232134233tgfg3452rfeqr23542',
    isAuth: true,
  });
  const [isLoading, setLoading] = React.useState(false);
  const [isError, setError] = React.useState(false);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  if (user.isAuth) {
    return (
      <Provider store={store}>
        {(user.role === 'admin' && <AdminRouter />) || <UserRouter />}
      </Provider>
    );
  }

  return <LoginScreen />;
};

export default App;
