import React from 'react';
import { View } from 'react-native';
import {ImageBackground, Image, Text} from 'react-native';
import Button from '../../components/Button/Button';

import style from './style'

export default function Error() {
    return(
        <ImageBackground source={require('../../assets/images/bg.png')} style={style.container}>
            <View style={style.txts} >
                <Text style={style.ops } >Ops...</Text>
                <Text style={style.errado} >Algo deu errado</Text>
            </View>
            <Button text="Voltar" style={style.voltar} />
            <Image source={require( '../../assets/images/error.png')} style={style.img} />
        </ImageBackground>
    )
}