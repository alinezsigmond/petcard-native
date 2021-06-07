import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import style from './style'

export default function Pet(props) {
    return(
        <>
        <TouchableHighlight>
            <View style={style.icon}>
                <Image source={props.imgSource} />
            </View>
        </TouchableHighlight>
        <Text style={style.nome}>{props.nome}</Text>
        </>
    )
}