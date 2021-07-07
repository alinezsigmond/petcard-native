import React from 'react';
import { ImageBackground, Image, Text, View, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import style from './style'

export default function HeaderSmall(props) {
    // const navigation = useNavigation();
    return(
        <ImageBackground source={require('../../assets/images/bg-dark.png')} style={style.header}>
            <TouchableHighlight 
            style={style.pressable}
            // onPress={() => navigation.openDrawer() }
            >
                <Image style={style.menu} source={require('../../assets/images/menu.png')} />
            </TouchableHighlight>
            <Text style={style.title} > {props.title} </Text>
        </ImageBackground>
    )
}