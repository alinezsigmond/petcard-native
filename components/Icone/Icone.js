import React from 'react'
import { Image, Text, View } from 'react-native'

import style from './style'

export default function Icone(props) {
    return(
        <View style={style.iconContainer}>
            <View style={style.icon}>
                <Image source={props.imgSource} />
            </View>
            <Text style={style.title}> {props.title} </Text>
        </View>
    )
}