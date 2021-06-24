import React from 'react'
import { useState } from 'react'
import { ScrollView, Text, TextInput, View, TouchableHighlight, Image } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'

import style from './style'

export default function Cadastro() {
    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [email2, setEmail2] = useState(null)
    const [senha, setSenha] = useState(null)
    const [senha2, setSenha2] = useState(null)
    const [nascimento, setNascimento] = useState(null)
    const cadastro = {
        nome: nome,
        email: email,
        email2: email2,
        senha: senha,
        senha2: senha2,
        nascimento: nascimento,
    }
    return(
        <ScrollView style={style.container}>
            <HeaderLogin />
            <View style={style.bar} />
            <View style={style.basic}>
                <TextInput
                    placeholder='Nome Completo'
                    placeholderTextColor='#3C6382'
                    returnKeyType="done"
                    style={style.input}
                    onChangeText={value => setNome(value)}
                />
                <TextInputMask
                placeholder='Data de nascimento'
                placeholderTextColor='#3C6382'
                returnKeyType="done"
                type='datetime'
                options={{
                    format: 'DD/MM/YYYY'
                }}
                style={style.input}
                onChangeText={value => setNascimento(value)} 
                />
                <TextInput
                    placeholder='E-mail'
                    placeholderTextColor='#3C6382'
                    keyboardType='email-address'
                    returnKeyType="done"
                    style={style.input}
                    onChangeText={value => setEmail(value)}
                />
                <TextInput
                    placeholder='Confirme o e-mail'
                    placeholderTextColor='#3C6382'
                    keyboardType='email-address'
                    returnKeyType="done"
                    style={style.input}
                    onChangeText={value => setEmail2(value)}
                />
                <TextInput
                    placeholder='Senha'
                    placeholderTextColor='#3C6382'
                    secureTextEntry={true}
                    returnKeyType="done"
                    style={style.input}
                    onChangeText={value => setSenha(value)}
                />
                <TextInput
                    placeholder='Confirme a senha'
                    placeholderTextColor='#3C6382'
                    secureTextEntry={true}
                    returnKeyType="done"
                    style={style.input}
                    onChangeText={value => setSenha2(value)}
                />
            </View>
            
            <TouchableHighlight 
                underlayColor='#32536E'
                style={style.footer} 
                onPress={() => console.log(cadastro)}
            >
                <Image 
                    style={style.arrow} 
                    resizeMethod='scale'
                    source={require('../../assets/images/arrow.png')}
                />
            </TouchableHighlight>
        </ScrollView>
    )
}