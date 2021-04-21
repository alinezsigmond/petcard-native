import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Footer from '../../components/Footer/Footer'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'

import style from './style'

export default function Login() {

    return(
        <View style={style.container} >
            <HeaderLogin />
            <View style={style.bar} />
            <View style={style.inputs} >
                <TextInput
                style={style.input}
                placeholder='E-mail'
                placeholderTextColor='#3C6382' />
                <TextInput
                style={style.input}
                placeholder='Senha'
                placeholderTextColor='#3C6382'
                secureTextEntry={true} />
                <Text style={style.forgot} >Esqueceu sua senha?</Text>
                <View style={style.fixed}>
                    <Footer />
                </View>
            </View>
        </View>
    )
}