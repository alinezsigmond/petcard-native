import React from 'react';
import {View, Text, TouchableHighlight, Alert } from 'react-native'
import style from './style'

export default function Button(props) {
    const tocou = ()=> {
        Alert.alert(
            'Funcionou',
            'Parabéns, estou orgulhosa :)'
        )
    }
    return(
        <TouchableHighlight 
        style={style.buttonStyle} 
        underlayColor="#3C6382" 
        onPress={tocou}>
            <Text style={style.textButton} >{props.text}</Text>
        </TouchableHighlight>
    )
}