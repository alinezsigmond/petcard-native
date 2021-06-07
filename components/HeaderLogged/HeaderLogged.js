import React from 'react'
import { ImageBackground, Image, Text, View } from 'react-native'

import style from './style'

export default function HeaderLogged(props) {
    return(
        <ImageBackground source={require('../../assets/images/bg-dark.png')} style={style.header}>
            <View style={style.icon}>
                <Image source={props.imgSource} />
            </View>
            <Text style={style.nome}>{props.nome}</Text>
        </ImageBackground>
    )
}