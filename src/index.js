import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { FirebaseAppProvider, FirestoreProvider, AuthProvider, useFirebaseApp } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyCmk-150FowRyPakrVaNkn2rPM6NNvM-A0",
  authDomain: "labux-11911015.firebaseapp.com",
  projectId: "labux-11911015",
  storageBucket: "labux-11911015.appspot.com",
  messagingSenderId: "530415925386",
  appId: "1:530415925386:web:b922d905887a16d570d573",
  measurementId: "G-2EL2HT80CB"
};

function FirebaseInitializedApp() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  const firebaseAuth = getAuth(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <AuthProvider sdk={firebaseAuth}>
        <App />
      </AuthProvider>
    </FirestoreProvider>
  );
}

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <FirebaseInitializedApp />
  </FirebaseAppProvider>,
  document.getElementById('root')
);