import { RNToasty } from 'react-native-toasty';
import http from './../../services/api';
import { GET_ALL_POST, WISHLIST_DATA } from './../types';


export const CreatePostApi = (postData, navigation, cb) => async (dispatch, getState) => {
    const {getAllPost} = getState().post
    
    cb && cb(true)
    dispatch({
        type: GET_ALL_POST,
        payload: getAllPost?.[0] ? [postData, ...getAllPost] : [postData],
    })
    RNToasty.Success({
        title: "Post Added Successfully"
    })
    cb && cb(false)
    navigation && navigation?.goBack()
};

export const GetAllPostApi = ( cb) => async (dispatch, getState) => {

    cb && cb(true)
    http.get(`posts`)
        .then(async response => {
            console.log("GetAllPostApi res : ", response?.data)
            if (response?.data) {
                dispatch({
                    type: GET_ALL_POST,
                    payload: response.data,
                })
                cb && cb(false)
            } else {
                cb && cb(false)
                dispatch({
                    type: GET_ALL_POST,
                    payload: null,
                })
            }
        })
        .catch(error => {
            cb && cb(false)
            dispatch({
                type: GET_ALL_POST,
                payload: null,
            })
        })
};

