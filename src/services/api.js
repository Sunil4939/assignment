import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getUniqueId} from 'react-native-device-info';

export const baseURL = 'https://jsonplaceholder.typicode.com/'
export const http2 = 'https://jsonplaceholder.typicode.com/'

const http = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
	timeout: 100000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		// ApiToken: 'U0RvR2x0SEZYa0ljSzgxUkFCUHZpRUpvREFlb0FuTFBPSFA=',
	},
});
// export const http2 = 'https://medzine.svisf.in/'
http.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem('@USER_TOKEN');
		// const signup_token = await AsyncStorage.getItem('@SIGNUP_TOKEN');
		// if(signup_token) config.headers.Authorization = `Bearer ${signup_token}`;
		if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
export default http;