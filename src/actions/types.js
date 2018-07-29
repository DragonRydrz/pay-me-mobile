import { AsyncStorage } from 'react-native';

// Invoice Types

export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const SUCCESS = 'SUCCESS';
export const ADD_INVOICE = 'ADD_INVOICE';
export const ALL_INVOICE = 'ALL_INVOICE';
export const INVOICE_IDX = 'INVOICE_IDX';
export const CURRENT_INVOICE = 'CURRENT_INVOICE';
export const ARRAY_MOVE = 'ARRAY_MOVE';
export const RESET_CURRINV = 'RESET_CURRINV';

// Auth Types

export const USER_INVOICES = 'USER_INVOICES';
export const USER = 'USER';
export const DE_AUTH = 'DE_AUTH';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';

// Retrives and returns JWT token from AsyncStorage

export async function getToken() {
  return await AsyncStorage.getItem('jwt')
    .then(token => token)
    .catch(err => {
      console.log(err);
      return undefined;
    });
}

export function setToken(token) {
  AsyncStorage.setItem('jwt', token);
}
