import React from 'react'
import { ImageBackground, Image, Text, View, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import style from './style'

export default function HeaderLogged(props) {
   const navigation = useNavigation();
    return(
        <ImageBackground source={require('../../assets/images/bg-dark.png')} style={style.header}>
            <TouchableHighlight 
            style={style.pressable}
            onPress={() => navigation.openDrawer() }>
                <Image style={style.menu} source={require('../../assets/images/menu.png')} />
            </TouchableHighlight>
            <View style={style.icon}>
                <Image source={props.imgSource} />
            </View>
            <Text style={style.nome}>{props.nome}</Text>
        </ImageBackground>
    )
}