/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import globalStore from './components/globalStore';

const ReduxProvider = () => (
  <Provider store={globalStore}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxProvider);
