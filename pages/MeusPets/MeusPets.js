import React, {useState, useEffect} from 'react'
import {TouchableHighlight, View, SafeAreaView } from 'react-native'
import HeaderLogged from '../../components/HeaderLogged/HeaderLogged'
import Pet from '../../components/Pet/Pet'
import api from '../../api'

import style from './style'

export default function MeusPets({navigation}) {
    const [pets, setPets] = useState([]);
    const [teste, setTeste] = useState([]);
    useEffect(() => {
        api.get('/pets').then(response => setPets(response.data));
    }, []);
    return (
        <View style={style.container}>
            <HeaderLogged
                nome='Meus pets'
                imgSource={require('../../assets/images/pata.png')}
            />
            <SafeAreaView 
                style={style.pets}
            >
                {pets.length !== 0 
                ?
                pets.map(post => (
                    <Pet
                        nome={post.nome}
                    />
                ))
                :
                <View></View>
                }
                <Pet
                imgSource={require('../../assets/images/add-pet.png')}
                nome='Novo pet'
                // action={navigation.navigate('Cadastro pet')}
                />
            </SafeAreaView>
        </View>
    )
}