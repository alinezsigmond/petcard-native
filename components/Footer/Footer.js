import React from 'react'
import { TouchableHighlight, Image, Alert } from 'react-native'
import style from './style'

export default function Footer(){
    return(
        <TouchableHighlight style={style.footer} onPress={Alert.alert('Oi')} >
            <Image 
            style={style.arrow} 
            resizeMethod='scale'
            source={require('../../assets/images/arrow.png')}
             />
        </TouchableHighlight>
    )
}