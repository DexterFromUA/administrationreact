import Firebase from 'firebase';
import config from './config';

let firebase;

if (!Firebase.apps.length) firebase = Firebase.initializeApp(config);

export {firebase};
