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
            <Icone title="Meus pets" />
            <Icone title="Calendário" />
            <Icone title="Dicas" />
        </View>
        <View style={style.icons}>
            <Icone title="Clínicas próximas" />
            <Icone title="Notificações" />
            <Icone title="Sair" />
        </View>
    </View>
    )
}