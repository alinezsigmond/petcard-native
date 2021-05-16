import React from 'react'
import { useState } from 'react'
import { Text, TextInput, View, TouchableHighlight, Image, Alert } from 'react-native'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'

import style from './style'

export default function Login() {
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const login = {
        email: email,
        senha: senha
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
                    onPress={() => console.log(login)}
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