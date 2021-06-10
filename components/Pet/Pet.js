import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableHighlight, View } from 'react-native'
import style from './style'

export default function Pet(props) {
   const navigation = useNavigation();
   return(
        <>
        <TouchableHighlight
            onPress={() => navigation.navigate('Cadastro pet') }
        >
            <View style={style.icon}>
                <Image source={props.imgSource} />
            </View>
        </TouchableHighlight>
        <Text style={style.nome}>{props.nome}</Text>
        </>
    )
}