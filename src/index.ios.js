// @flow

import React from 'react';
import { Provider } from 'react-redux';
import createStore from './stores/createStore';
import AppWithNavigationState from './routes/AppNavigator';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}

export default App;
