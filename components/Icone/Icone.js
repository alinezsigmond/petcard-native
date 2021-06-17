import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'

import style from './style'

export default function Icone(props, {navigation}) {
    return(
        <View style={style.iconContainer}>
            <TouchableHighlight 
            onPress={ props.action } 
            style={style.icon}
            underlayColor="#3C6382"
            >
                <Image source={props.imgSource} />
            </TouchableHighlight>
            <Text style={style.title}> {props.title} </Text>
        </View>
    )
}