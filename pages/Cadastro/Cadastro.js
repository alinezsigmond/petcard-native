import React from 'react'
import { useState } from 'react'
import { ScrollView, Text, TextInput, View, TouchableHighlight, Image, Alert } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'
import api from '../../api'

import style from './style'

export default function Cadastro() {
    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [nascimento, setNascimento] = useState(null)
    const cadastro = {
        id:0,
        normalizedEmail: email,
        passwordHash: senha,
        userInfo:{
            Id:0,
            nome: nome,
            dataDeNascimento: nascimento
        }
    }
    const token = ' '
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    function cadastra(cadastro) {
        console.log(cadastro)
        api.post( 
            '/usuarios',
            cadastro,
            config
          )
        .then((res) => {
            console.log(res.data),
            Alert.alert('Sucesso','Seu cadastro foi feito')
        })
        .catch((error) => {
            alert(error),
            Alert.alert('Opa','Algo deu errado')
        })
        // api.post('/usuarios', {
        //     headers: {
        //     Authorization: `Bearer ${token}`,
        //     data: {cadastro},
        //     }
        // })
        // .then((res) => {
        //     console.log(res.data)
        // })
        // .catch((error) => {
        //     alert(error)
        // })
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
                    format: 'YYYY-MM-DD'
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
                {/* <TextInput
                    placeholder='Confirme o e-mail'
                    placeholderTextColor='#3C6382'
                    keyboardType='email-address'
                    returnKeyType="done"
                    style={style.input}
                    onChangeText={value => setEmail2(value)}
                /> */}
                <TextInput
                    placeholder='Senha'
                    placeholderTextColor='#3C6382'
                    secureTextEntry={true}
                    returnKeyType="done"
                    style={style.input}
                    onChangeText={value => setSenha(value)}
                />
                {/* <TextInput
                    placeholder='Confirme a senha'
                    placeholderTextColor='#3C6382'
                    secureTextEntry={true}
                    returnKeyType="done"
                    style={style.input}
                    onChangeText={value => setSenha2(value)}
                /> */}
            </View>
            
            <TouchableHighlight 
                underlayColor='#32536E'
                style={style.footer} 
                onPress={() => cadastra(cadastro)}
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