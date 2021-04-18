import React from 'react';
import {View, Text } from 'react-native'
import style from './style'

export default function Button(props) {
    return(
        <View style={style.buttonStyle}>
            <Text style={style.textButton} >{props.text}</Text>
        </View>
    )
}