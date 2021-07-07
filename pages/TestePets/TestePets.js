import React, {useState, useEffect} from 'react'
import { Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import api from '../../api';
import { getToken } from '../../service/auth';

export default function TestePets() {
    async function Bora() {
        const token = await getToken();
        useEffect(() => {
            api.get('/pets').then(response => console.log(response.data));
        }, []);
        
    }
    const [pets, setPets] = useState([]);
    // useEffect(() => {
    //     api.get('/pets').then(response => console.log(response.data));
    // }, []);
    return (
        <>
        <Text style={{margin: 50}} >Bem vindo,</Text>
        <TouchableHighlight
        onPress={() => Bora()}
        >
            <Text style={{paddingTop: 100, textAlign: 'center'}} >Toque aqui e teste sua fé</Text>
        </TouchableHighlight>
        {/* {posts.map(post => (
            //key={post.id} label={post.nome} value={post.id}
            <Text> {post.nome} </Text>
        ))} */}
        </>
    )
}