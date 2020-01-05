import {keys} from '../assets/keys'

export const environment = {
  production: false,
   firebaseConfig: {
    apiKey: keys['apiKey'],
    authDomain: keys['authDomain'],
    databaseURL: keys['databaseURL'],
    projectId: keys['projectId'],
    storageBucket: keys['storageBucket'],
    messagingSenderId: keys['messagingSenderId'],
    appId: keys['appId'],
    measurementId: keys['measurementId']
  }
};