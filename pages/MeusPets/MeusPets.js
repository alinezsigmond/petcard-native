import React from 'react'
import {View} from 'react-native'
import HeaderLogged from '../../components/HeaderLogged/HeaderLogged'
import Pet from '../../components/Pet/Pet'

import style from './style'

export default function MeusPets() {
    return (
        <View style={style.container}>
            <HeaderLogged nome='Meus pets' imgSource={require('../../assets/images/pata.png')} />
            <View style={style.pets}>
                <Pet imgSource={require('../../assets/images/add-pet.png')} nome='Novo pet' />
            </View>
        </View>
    )
}