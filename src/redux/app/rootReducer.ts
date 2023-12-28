import { combineReducers } from '@reduxjs/toolkit';
import { rtkQueryReducers } from './rtkQueryReducers';
import { simpleReducers } from './simpleReducers';


export const rootReducer = combineReducers({
 ...rtkQueryReducers,
  ...simpleReducers
});