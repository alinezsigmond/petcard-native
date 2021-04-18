import React from 'react'
import { View, TextInput, ImageBackground, Text, ScrollView } from 'react-native'
import Footer from '../../components/Footer/Footer'

import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'
import style from './style'

export default function Login() {
    
    return(
        <>
        <ScrollView style={style.container}>
            <HeaderLogin />
            <View style={style.basic}>
                <TextInput
                    placeholder='Nome Completo'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                />
                <TextInput
                    placeholder='E-mail'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                />
                <TextInput
                    placeholder='Confirme o e-mail'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                />
                <TextInput
                    placeholder='Senha'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                    secureTextEntry={true}
                />
                <TextInput
                    placeholder='Confirme a senha'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                    secureTextEntry={true}
                />
            </View>
            <View style={style.personal}>
                <Text style={style.info} >Informações pessoais</Text>
                <TextInput
                    placeholder='Data de nascimento'
                    keyboardType="numeric"
                    placeholderTextColor='#3C6382'
                    style={style.input}
                />
                <TextInput
                    placeholder='CEP'
                    keyboardType="numeric"
                    placeholderTextColor='#3C6382'
                    style={style.input}
                />
                <TextInput
                    placeholder='Cidade'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                />
                <TextInput
                    placeholder='Estado'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                />
                <TextInput
                    placeholder='País'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                />
                <TextInput
                    placeholder='Rua'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                />
                <TextInput
                    placeholder='Número'
                    keyboardType="numeric"
                    placeholderTextColor='#3C6382'
                    style={style.input}
                />
            </View>
            <Footer />
        </ScrollView>
        </>
    )
}