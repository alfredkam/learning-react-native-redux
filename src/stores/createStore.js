// @flow

import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../utils/redux';
import thunk from 'redux-thunk';

const thuckMiddlware = applyMiddleware(thunk);
const reactNavigationMiddleware = applyMiddleware(middleware);

export default (data: Object = {}) => {
  return createStore(
    data,
    reactNavigationMiddleware,
    thuckMiddlware
  );
}
