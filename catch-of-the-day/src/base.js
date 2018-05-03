import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC5NY9uItbkasN_Ujnl-3MjYsy1jr7Aakk",
  authDomain: "catch-of-the-day-react-af3e3.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-react-af3e3.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;