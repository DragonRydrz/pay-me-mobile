import { combineReducers } from 'redux';
import authReducer from './authReducer';
import invoiceReducer from './invoiceReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  invoice: invoiceReducer,
});

export default rootReducer;
