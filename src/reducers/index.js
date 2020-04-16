import { combineReducers } from 'redux';

import headerReducer from './headerReducer';
import topPageReducer from './topPageReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  topPage: topPageReducer,
  // ... autres reducers
});

export default rootReducer;
