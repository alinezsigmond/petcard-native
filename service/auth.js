import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = "@petcard/token"
export const setToken = async token => {AsyncStorage.setItem(TOKEN_KEY, token)}
export const getToken = async () => {AsyncStorage.getItem(TOKEN_KEY)}
export const isAuthenticated = async () => AsyncStorage.getItem(TOKEN_KEY) !== null;