import React from 'react'
import { ImageBackground, View, Text, Image, TouchableHighlight } from 'react-native'
import style from './style'

export default function CadastroPet({navigation}) {
    return(
        <View style={style.container}>
            <ImageBackground 
                source={require('../../assets/images/bg-dark.png')}
                style={style.header}
            >
                <TouchableHighlight
                    style={style.pressable}
                    onPress={() => navigation.goBack()}    
                >
                    <Image 
                        source={require('../../assets/images/arrow.png')} 
                        style={style.voltar}
                    />
                </TouchableHighlight>
                <Text style={style.titulo} >Qual pet deseja cadastrar?</Text>
                <Text style={style.subtitulo} >Preencha o formulário. Quanto mais informação, melhor!</Text>
            </ImageBackground>

        </View>
    )
}