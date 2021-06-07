import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'

import style from './style'

export default function Icone(props) {
    return(
        <View style={style.iconContainer}>
            <TouchableHighlight style={style.icon}>
                <Image source={props.imgSource} />
            </TouchableHighlight>
            <Text style={style.title}> {props.title} </Text>
        </View>
    )
}