import React from 'react'
import { ImageBackground, Image, Text, View } from 'react-native'

import style from './style'

export default function HeaderLogin() {
    
    return(
        <ImageBackground source={require('../../assets/images/bg-dark.png')} style={style.header}>
            <Image style={style.logo} source={require('../../assets/images/logotipo.png')} />
            <Text style={style.text} >A carteira de vacinação</Text>
            <Text style={style.text2}>online do seu pet</Text>
            <View style={style.options}>
                <Text style={style.cadastrar} >Cadastrar</Text>
                <Text style={style.login} >Login</Text>
            </View>
        </ImageBackground>
    )
}