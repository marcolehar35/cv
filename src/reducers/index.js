import { combineReducers } from 'redux';

import headerReducer from './headerReducer';
import topPageReducer from './topPageReducer';
import devWebReducer from './devWebReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  topPage: topPageReducer,
  devWeb: devWebReducer,
  // ... autres reducers
});

export default rootReducer;
