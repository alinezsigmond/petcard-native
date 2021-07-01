import React from 'react'
import { useState } from 'react'
import { Text, TextInput, View, TouchableHighlight, Image, Alert } from 'react-native'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'
import api from '../../api'

import style from './style'

export default function Login({navigation}) {
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const login = {
        username: email,
        password: senha
    }
    const token = ' '
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    function logar(login) {
        api.post( 
            '/login',
            login,
            config
          )
        .then((res) => {
            console.log(res.data),
            alert('Seu token está no console'),
            navigation.navigate('Home')
        })
        .catch((error) => {
            alert(error),
            alert('Opa, deu ruim')
        })
    }
    return(
        <View style={style.container} >
            <HeaderLogin />
            <View style={style.bar} />
            <View style={style.inputs} >
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
                <Text style={style.forgot} >Esqueceu sua senha?</Text>
                <View style={style.fixed}>
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
                </View>
            </View>
        </View>
    )
}