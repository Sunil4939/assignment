import AsyncStorage from '@react-native-async-storage/async-storage';
import {RNToasty} from 'react-native-toasty';
import {AUTH_TOKEN, USER_DATA, } from './../types';

export const AuthFunction = () => dispatch => {
  dispatch({
    type: AUTH_TOKEN,
    payload: 's',
  });
};

export const LoginApi = (postData, cb) => async dispatch => {
  console.log("LoginApi : ", postData)
  cb && cb(true)
  dispatch({
    type: USER_DATA,
    payload: postData,
  })
  dispatch({
    type: AUTH_TOKEN,
    payload: "token"
  })
  await AsyncStorage.setItem('@USER_TOKEN', "token");
  RNToasty.Success({
    title: "login Successfully"
  })
  cb && cb(false)

};


export const LogoutApi = () => dispatch => {
  dispatch({
    type: AUTH_TOKEN,
    payload: null,
  });
  dispatch({
    type: USER_DATA,
    payload: null,
  })
  AsyncStorage.removeItem('@USER_TOKEN');
  AsyncStorage.removeItem('@USER_ID');
  RNToasty.Normal({
    title: 'Logout Successful',
  });
};

