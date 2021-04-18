import React from 'react'
import { TouchableHighlight, Image } from 'react-native'
import style from './style'

export default function Footer(){
    return(
        <TouchableHighlight style={style.footer}>
            <Image 
            style={style.arrow} 
            resizeMethod='scale'
            source={require('../../assets/images/arrow.png')} />
        </TouchableHighlight>
    )
}