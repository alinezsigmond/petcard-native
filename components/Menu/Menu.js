import React from 'react'
import {View, Text, Image} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'

import style from './style'

export default function Menu(props) {
   const navigation = useNavigation();
    return(
        <View style={style.container}>
            <View style={style.top}>
                <Image 
                    style={style.avatar}
                    source={require('../../assets/images/menu/avatar.png')} 
                />
                <View style={style.info}>
                    <Text style={style.nome}> {props.nome} </Text>
                    <Text style={style.cidade}> {props.cidade} </Text>
                </View>
            </View>

            <DrawerItem style={style.text}
                label='Home'
                labelStyle={style.text}
                icon={() => (<Image source={require('../../assets/images/menu/home.png')} />)}
                onPress={() => navigation.navigate('Home')}
            />            
            <DrawerItem 
                label='Meus pets'
                labelStyle={style.text}
                icon={() => (<Image source={require('../../assets/images/menu/pets.png')} />)}
                onPress={() => navigation.navigate('Meus pets')} 
            />
        </View>
    )
}