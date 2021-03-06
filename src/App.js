import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import createStore from './store';
import Home from './Home';
// import registerServiceWorker from './registerServiceWorker'; 
import * as config from './config';
import Login from './components/Login/Login';

// Initialize Firebase instance
firebase.initializeApp(config.fbConfig || process.env.REACT_APP_FIREBASE_CONFIG)

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const store = createStore()


function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={config.rfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <Login />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
