import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableHighlight, View } from 'react-native'
import style from './style'

export default function Pet(props) {
   const navigation = useNavigation();
   return(
        <>
        <TouchableHighlight
            onPress={props.action}
        >
            <View style={style.icon}>
                <Image source={props.imgSource} />
            </View>
        </TouchableHighlight>
        <TouchableHighlight 
            onPress={props.action}
        >
            <Text style={style.nome}>{props.nome}</Text>
        </TouchableHighlight>
        </>
    )
}