import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { HOST } from '../config';

import {
  AUTHENTICATION_ERROR,
  USER_INVOICES,
  USER,
  DE_AUTH,
  AUTH_SUCCESS,
  getToken,
  setToken,
  LOADING,
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
  } else {
    return {
      type: AUTHENTICATION_ERROR,
      payload: '',
    };
  }
}

export function loading(x) {
  return {
    type: LOADING,
    payload: x,
  };
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
      .catch(error => {
        // console.log(error.response);
        // dispatch(authError(error.response.data.message));

        if (error) console.log('error: ', error);
        if (error.response) {
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
        if (navigate) navigate('App');
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
        dispatch(authError(error.response.data.message));
        // if (error) console.log('error: ', error.response);
        // else if (error.response.data.err.errors) {
        //   dispatch(authError('Your username must be a valid email address.'));
        // } else if (error.response.data.err.errmsg) {
        //   dispatch(authError('This username already exists.'));
        // }
      });
  };
}

export function logout(navigate) {
  return dispatch => {
    dispatch({ type: 'DE_AUTH' });
    AsyncStorage.removeItem('jwt');
    navigate('Auth');
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
        dispatch(authError(error.response.data.message));

        // if (error) console.log('error: ', error.response);
        // dispatch(authError('Error changing your password', error));
      });
  };
}
