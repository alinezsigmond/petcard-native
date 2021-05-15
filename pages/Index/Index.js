import React from 'react';
import { View, Text, Image, ImageBackground, TouchableHighlight } from 'react-native';
import style from './style'

import Button from '../../components/Button/Button'

export default function Index({navigation}) {
    
    return(
        <ImageBackground source={require('../../assets/images/bg.png')} style={ style.container }>
            <View style={style.content}>
                <Image style={ style.imgStyle } source={require( '../../assets/images/petcardLogo.png' )} />
                <Text style={style.titulo}>A carteira de vacinação online do seu pet</Text>
                <TouchableHighlight 
                style={style.buttonStyle} 
                underlayColor="#3C6382"
                onPress={() => navigation.navigate('Login')}
                >
                    <Text style={style.textButton} >Login</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )
}