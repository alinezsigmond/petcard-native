import React from 'react'
import { Text, View } from 'react-native'

import style from './style'

export default function Icone(props) {
    return(
        <View style={style.iconContainer}>
            <View style={style.icon}>
                {/* <Image /> */}
            </View>
            <Text style={style.title}> {props.title} </Text>
        </View>
    )
}