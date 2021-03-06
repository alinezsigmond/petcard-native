import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import style from './style'

import HeaderLogged from '../../components/HeaderLogged/HeaderLogged'
import Icone from '../../components/Icone/Icone'
import api from '../../api'

export default function Home({navigation}) {
    const [info, setInfo] = useState();
    const [dado, setDado] = useState({
        nome: '',
        loading: true
    });
    useEffect(() => {
        if(dado.loading) {
            api.get('/userinfo')
            .then(response => setInfo(response.data))
            .then(() => setDado({...dado, loading: false}))
        }
        if (!dado.loading) {
            setDado({...dado, nome: info.nome})
        }
    }, [dado.loading]);
    return(
        <View style={style.container}>
            <HeaderLogged 
            nome={dado.nome} 
            imgSource={require('../../assets/images/user.png')}
            />    
            
            <View style={style.icons}>
                <Icone 
                    title="Meus pets" 
                    imgSource={require('../../assets/images/icons/meus-pets.png')}
                    action={() => navigation.navigate('Meus pets')}
                />
                <Icone
                    title="Calendário"
                    imgSource={require('../../assets/images/icons/calendario.png')}
                />
                <Icone
                    title="Dicas"
                    imgSource={require('../../assets/images/icons/dicas.png')}
                />
            </View>
            <View style={style.icons}>
                <Icone
                    title="Clínicas próximas"
                    imgSource={require('../../assets/images/icons/clinicas-proximas.png')}
                />
                <Icone
                    title="Notificações"
                    imgSource={require('../../assets/images/icons/notificacoes.png')}
                />
                <Icone
                    title="Sair"
                    imgSource={require('../../assets/images/icons/logout.png')}
                    action={() => navigation.navigate('Index')}
                />
            </View>
        </View>
    )
}