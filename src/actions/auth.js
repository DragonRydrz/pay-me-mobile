import axios from 'axios';
import { HOST } from '../config';

import {
  AUTHENTICATION_ERROR,
  USER_INVOICES,
  USER,
  DE_AUTH,
  AUTH_SUCCESS,
  getToken,
  setToken,
} from './types';

// const token = getToken();
// axios.defaults.headers.common.Authorization = `bearer ${token}`;

////////////////////////////////////
// Auth
////////////////////////////////////

export function authError(error) {
  if (error) {
    return {
      type: AUTHENTICATION_ERROR,
      payload: error,
    };
  }
}

export function login(credentials, navigate) {
  return dispatch => {
    console.log(credentials);
    axios
      .post(`${HOST}/api/login`, credentials, {
        headers: { Authorization: `bearer ${getToken()}` },
      })
      .then(res => {
        setToken(res.data.token);
        axios.defaults.headers.common.Authorization = `bearer ${
          res.data.token
        }`;
        console.log(res.data.user);
        dispatch({ type: USER_INVOICES, payload: res.data.user.invoices });
        dispatch({ type: USER, payload: res.data.user });
        navigate('Invoices');
      })
      .catch(err => {
        if (err) console.log('error: ', err);
        if (err.response) {
          dispatch(authError('Username/Password invalid.'));
        }
      });
  };
}

export function autoLogin(token, navigate) {
  return dispatch => {
    axios
      .get(`${HOST}/api/login`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then(res => {
        setToken(res.data.token);
        dispatch({ type: 'USER_INVOICES', payload: res.data.user.invoices });
        dispatch({ type: 'USER', payload: res.data.user });
        // console.log(history.location.pathname);
        navigate('Invoices');
      })
      .catch(err => {
        if (err) console.log('error: ', err);
      });
  };
}

export function updateUser(user) {
  return {
    type: USER,
    payload: user,
  };
}

export function register(credentials, navigate) {
  return dispatch => {
    axios
      .post(`${HOST}/api/register`, credentials, {
        headers: { Authorization: `bearer ${getToken()}` },
      })
      .then(res => {
        setToken(res.data.token);
        // dispatch({ type: LOGIN, payload: res.data });
        navigate('Invoices');
      })
      .catch(error => {
        if (error) console.log('error: ', error.response);
        else if (error.response.data.err.errors) {
          dispatch(authError('Your username must be a valid email address.'));
        } else if (error.response.data.err.errmsg) {
          dispatch(authError('This username already exists.'));
        }
      });
  };
}

export function logout(history) {
  return dispatch => {
    dispatch({ type: 'DE_AUTH' });
    localStorage.removeItem('id');
    history.push('/');
  };
}
// { header: { Authorization: `bearer ${token}` } }

export function changePassword(newPassword, history) {
  return dispatch => {
    axios
      .post(`${HOST}/api/changepassword`, newPassword, {
        headers: { Authorization: `bearer ${getToken()}` },
      })
      .then(res => {
        dispatch({
          type: 'AUTH_SUCCESS',
          payload: 'Successfully changed your password',
        });
        // history.push('/invoices');
      })
      .catch(error => {
        if (error) console.log('error: ', error.response);
        dispatch(authError('Error changing your password', error));
      });
  };
}
