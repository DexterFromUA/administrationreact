/**
 * @format
 */

import React from 'react';

import LoadingScreen from './src/screens/LoadingScreen';
import ErrorScreen from './src/screens/ErrorScreen';
import LoginScreen from './src/screens/LoginScreen';
import AdminRouter from './src/navigation/AdminRouter';
import UserRouter from './src/navigation/UserRouter';
// import getUserInfo from './src/services/authService';

const App = () => {
  const [user, setUser] = React.useState({
    name: 'test',
    role: 'user',
    token: '1232134233tgfg3452rfeqr23542',
    isAuth: false,
  });
  const [isLoading, setLoading] = React.useState(false);
  const [isError, setError] = React.useState(false);

  // React.useEffect(() => {
  //   setLoading(true);
  //   //getUserInfo();
  //   setUser({
  //     name: 'Test Name',
  //     role: 'user',
  //     token: 'token',
  //     isAuth: true,
  //   });
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  //   console.log('getUserInfo effect in progress - ', user);
  // }, [user]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  if (!user.isAuth) {
    return (user.role === 'admin' && <AdminRouter />) || <UserRouter />;
  }

  return <LoginScreen />;
};

export default App;
