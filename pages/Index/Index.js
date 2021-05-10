import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import style from './style'

import Button from '../../components/Button/Button'

export default function Index() {
    
    return(
        <ImageBackground source={require('../../assets/images/bg.png')} style={ style.container }>
            <View style={style.content}>
                <Image style={ style.imgStyle } source={require( '../../assets/images/petcardLogo.png' )} />
                <Text style={style.titulo}>A carteira de vacinação online do seu pet</Text>
                <Button text="Login" style={style.botao} />
            </View>
        </ImageBackground>
    )
}