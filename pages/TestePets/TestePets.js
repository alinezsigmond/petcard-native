import React, {useState, useEffect} from 'react'
import { Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker'
import api from '../../api';
import { getToken } from '../../service/auth';
import Pet from '../../components/Pet/Pet';

export default function TestePets() {
    const [pets, setPets] = useState([]);
    const [teste, setTeste] = useState([]);
    useEffect(() => {
        api.get('/pets').then(response => setPets(response.data));
    }, []);
    return (
        <>
        <Text style={{margin: 50}} >Bem vindo,</Text>
        {
            pets.map(post => (
                <Pet
                    nome={post.nome}
                />
            ))
        }
        {/* ESSA PARTE FUNCIONOU!!! */}
        {/* <Picker
        style
        dropdownIconColor='#3C6382'
        selectedValue={teste}
        onValueChange={(itemValue) =>
        setTeste(itemValue)
        }>
            <Picker.Item style={{color: '#3C6382'}} key={teste.id} label='Reze para dar certo' value={0} />
            {pets.map(post => (
                <Picker.Item key={post.id} label={post.nome} value={post.id} />
            ))}
        </Picker> */}
        </>
    )
}