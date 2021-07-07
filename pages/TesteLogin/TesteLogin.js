import React, { useState, useEffect }  from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, TextInput, View, TouchableHighlight, Image, Alert } from 'react-native'
import api from '../../api'
import style from './style'
import { setToken } from '../../service/auth'
import { NavigationContainer } from '@react-navigation/native'

export default function TesteLogin({navigation}) {
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const login = {
        username: email,
        password: senha
    }
    function logar(login) {
        api.post( 
            '/login',
            login
          )
        .then((res) => {
            setToken(res.data)
        })
        .catch((error) => {
            Alert.alert('Opa','E-mail ou senha inválido')
            console.log(error)
        })
    }
    
    return (
        <>
            <TextInput
                placeholder='E-mail'
                placeholderTextColor='#3C6382'
                keyboardType='email-address'
                style={style.input}
                onChangeText={value => setEmail(value)}
            />
            <TextInput
                placeholder='Senha'
                placeholderTextColor='#3C6382'
                secureTextEntry={true}
                style={style.input}
                onChangeText={value => setSenha(value)}
            />

            <TouchableHighlight 
                underlayColor='#32536E'
                style={style.footer} 
                onPress={() => logar(login)}
            >
                <Image 
                    style={style.arrow} 
                    resizeMethod='scale'
                    source={require('../../assets/images/arrow.png')}
                />
            </TouchableHighlight>

            <TouchableHighlight 
            style={style.botao}
            onPress={() =>{navigation.navigate('Teste pets')}}
            >
                <Text style={style.deus} >Seja o que deus quiser</Text>
            </TouchableHighlight>
        </>
    )
}