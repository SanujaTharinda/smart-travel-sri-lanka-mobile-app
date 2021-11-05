import React from "react";
import {Platform, InteractionManager} from 'react-native';
import RootNavigator from "./app/navigation";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as theme from './app/theme/custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import createStore from './app/store/configureStore';
import firebase, { rrfConfig } from './app/firebase';

require('./app/utils/resolveTimeoutError');
require('./app/firebase');
require('./app/APIs/distanceMatrixAPI');

const store = createStore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};


export default App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Provider store = {store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <RootNavigator />
        </ReactReduxFirebaseProvider>
      </Provider>
    </ApplicationProvider>
  </>

);
