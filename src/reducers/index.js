import { combineReducers } from 'redux';

import headerReducer from './headerReducer';
import topPageReducer from './topPageReducer';
import devWebReducer from './devWebReducer';
import chargeComReducer from './chargeComReducer';
import portFolioReducer from './portFolioReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  topPage: topPageReducer,
  devWeb: devWebReducer,
  portFolio: portFolioReducer,
  chargeCom: chargeComReducer,
  // ... autres reducers
});

export default rootReducer;
