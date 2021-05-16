import React from 'react'
import { ImageBackground, Image, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import style from './style'

export default function HeaderLogin() {
    const navigation = useNavigation();
    return(
        <ImageBackground source={require('../../assets/images/bg-dark.png')} style={style.header}>
            <Image style={style.logo} source={require('../../assets/images/logotipo.png')} />
            <Text style={style.text} >A carteira de vacinação</Text>
            <Text style={style.text2}>online do seu pet</Text>
            <View style={style.options}>
                <Text style={style.cadastrar} onPress={() => navigation.navigate('Cadastro')} >Cadastrar</Text>
                <Text style={style.login} onPress={() => navigation.navigate('Login')} >Login</Text>
            </View>
        </ImageBackground>
    )
}