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
    const [cep, setCep] = useState(null)
    const [pais, setPais] = useState(null)
    const [estado, setEstado] = useState(null)
    const [cidade, setCidade] = useState(null)
    const [rua, setRua] = useState(null)
    const [numero, setNumero] = useState(null)
    const cadastro = {
        nome: nome,
        email: email,
        senha: senha,
        nascimento: nascimento,
        cep: cep,
        pais: pais,
        estado: estado,
        cidade: cidade,
        rua: rua,
        numero: numero
    }
    return(
        <ScrollView style={style.container}>
            <HeaderLogin />
            <View style={style.bar} />
            <View style={style.basic}>
                <TextInput
                    placeholder='Nome Completo'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                    onChangeText={value => setNome(value)}
                />
                <TextInput
                    placeholder='E-mail'
                    placeholderTextColor='#3C6382'
                    keyboardType='email-address'
                    style={style.input}
                    onChangeText={value => setEmail(value)}
                />
                <TextInput
                    placeholder='Confirme o e-mail'
                    placeholderTextColor='#3C6382'
                    keyboardType='email-address'
                    style={style.input}
                    onChangeText={value => setEmail2(value)}
                />
                <TextInput
                    placeholder='Senha'
                    placeholderTextColor='#3C6382'
                    secureTextEntry={true}
                    style={style.input}
                    onChangeText={value => setSenha(value)}
                />
                <TextInput
                    placeholder='Confirme a senha'
                    placeholderTextColor='#3C6382'
                    secureTextEntry={true}
                    style={style.input}
                    onChangeText={value => setSenha2(value)}
                />
            </View>
            <View style={style.personal}>
                <Text style={style.info}>Informações Pessoais</Text>
                <TextInputMask
                    placeholder='Data de nascimento'
                    placeholderTextColor='#3C6382'
                    type='datetime'
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    style={style.input}
                    onChangeText={value => setNascimento(value)} 
                />
                <TextInputMask 
                    style={style.input}
                    placeholderTextColor='#3C6382'
                    placeholder='CEP'
                    keyboardType='numeric'
                    type='custom'
                    options={{
                        mask: '99999-999'
                    }}
                    onChangeText={value => setCep(value)} 
                />
                <TextInput
                    placeholder='País'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                    onChangeText={value => setPais(value)}
                />
                <TextInput
                    placeholder='Estado'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                    onChangeText={value => setEstado(value)}
                />
                <TextInput
                    placeholder='Cidade'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                    onChangeText={value => setCidade(value)}
                />
                <TextInput
                    placeholder='Rua'
                    placeholderTextColor='#3C6382'
                    style={style.input}
                    onChangeText={value => setRua(value)}
                />
                <TextInput
                    placeholder='Número'
                    keyboardType="numeric"
                    returnKeyType="done"
                    placeholderTextColor='#3C6382'
                    style={style.input}
                    onChangeText={value => setNumero(value)}
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