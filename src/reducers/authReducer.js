import {
  AUTHENTICATION_ERROR,
  DE_AUTH,
  AUTH_SUCCESS,
  USER,
  LOADING,
} from '../actions/types';

const initialState = {
  message: '',
  success: '',
  isLoading: false,
  invoices: [],
  invoiceIdx: 0,
  currentInvoice: '',
  admin: {},
};

// const initialState = {
//   admin: [],
// };

export default function(state = initialState, action) {
  // console.log(action.type);
  switch (action.type) {
    case USER:
      return { ...state, admin: action.payload };
    case DE_AUTH:
      // return { ...state, invoices: [] };
      return { ...initialState };
    case AUTHENTICATION_ERROR:
      return { ...state, message: action.payload };
    case AUTH_SUCCESS:
      return { ...state, success: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
