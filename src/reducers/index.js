import { combineReducers } from 'redux';

import headerReducer from './headerReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  // ... autres reducers
});

export default rootReducer;
