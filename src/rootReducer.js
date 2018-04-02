// @flow
import { combineReducers } from 'redux';

import { nav, auth } from './routes/reducer';

export default combineReducers({
  nav,
  auth,
});
