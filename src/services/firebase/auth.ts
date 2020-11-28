import auth from '@react-native-firebase/auth';

export const FBAuthFactory = () => {
  interface createUserInterface {
    mail: string;
    pass: string;
  }

  const createUser = async ({mail, pass}: createUserInterface) => {
    auth()
      .createUserWithEmailAndPassword(mail, pass)
      .then(() => {
        console.log('User created');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const checkUser = async () => {};

  const loginUser = async () => {};

  const logoutUser = async () => {};

  return Object.freeze({auth, createUser, checkUser, loginUser, logoutUser});
};
