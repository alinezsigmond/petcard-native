// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN_KEY = "@petcard/token"
export async function setToken(token) {
    await AsyncStorage.setItem('@petcard/token', JSON.stringify(token))
}
export async function getToken() {
    const token = await AsyncStorage.getItem('@petcard/token');
    return token;
}