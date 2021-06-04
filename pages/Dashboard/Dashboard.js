import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

import HeaderLogged from '../../components/HeaderLogged/HeaderLogged'
import Icone from '../../components/Icone/Icone'

export default function Dashboard() {
    return(
    <View style={style.container}>
        <HeaderLogged nome="Aline Zsigmond" />
        <View style={style.icons}>
            <Icone title="Meus pets" imgSource={require('../../assets/images/icons/meus-pets.png')} />
            <Icone title="Calendário" imgSource={require('../../assets/images/icons/calendario.png')} />
            <Icone title="Dicas" imgSource={require('../../assets/images/icons/dicas.png')} />
        </View>
        <View style={style.icons}>
            <Icone title="Clínicas próximas" imgSource={require('../../assets/images/icons/clinicas-proximas.png')} />
            <Icone title="Notificações" imgSource={require('../../assets/images/icons/notificacoes.png')} />
            <Icone title="Sair" imgSource={require('../../assets/images/icons/logout.png')} />
        </View>
    </View>
    )
}