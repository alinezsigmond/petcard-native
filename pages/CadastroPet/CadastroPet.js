import React from 'react'
import { useState } from 'react'
import { ImageBackground, View, Text, Image, TouchableHighlight, TextInput, ScrollView } from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { TextInputMask } from 'react-native-masked-text'
import DropDownPicker from 'react-native-dropdown-picker'
import style from './style'

import racasGato from './raca-gato.json'
import racasCachorro from './raca-cachorro.json'

export default function CadastroPet({navigation}) {
    const [especie, setEspecie] = useState(0);
    const [raca, setRaca] = useState();
    const [nome, setNome] = useState(null);
    const [nascimento, setNascimento] = useState(null);
    const [sexo, setSexo] = useState(null);
    const [peso, setPeso] = useState(null);
    const cadastro = {
        especie: especie,
        raca: raca,
        nome: nome,
        nascimento: nascimento,
        sexo: sexo,
        peso: peso
    }
    
    function hasSelected(especie) {
        if (especie == 0) {
            return false;
        } else {
            return true;
        }
    }
    return(
        <>
        <ScrollView style={style.container}>
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
            
            <View style={style.picker}>
                <Picker
                style
                dropdownIconColor='#3C6382'
                selectedValue={especie}
                onValueChange={(itemValue) =>
                setEspecie(itemValue)
                }>
                    <Picker.Item style={{color: '#3C6382'}} key={especie.id} label='Selecione a espécie' value={null} />
                    <Picker.Item style={{color: '#3C6382'}} key={especie.id} label='Cachorro' value={1} />
                    <Picker.Item style={{color: '#3C6382'}} key={especie.id} label='Gato' value={2} />
                </Picker>
            </View>

            {
                (especie == 1) 
                ?
                <View style={style.picker}>
                    <Picker
                    enabled={hasSelected(especie)}
                    dropdownIconColor='#3C6382'
                    selectedValue={raca}
                    onValueChange={(itemValue, itemIndex) => setRaca(itemValue)}
                    >
                        {
                            racasCachorro.map((racasCachorro) => <Picker.Item
                            style={{color: '#3C6382'}}
                            key={racasCachorro.id}
                            label={racasCachorro.breed} 
                            value={racasCachorro.id} />)
                        }
                    </Picker> 
                </View>
                :
                <View style={style.picker}>
                    <Picker
                    enabled={hasSelected(especie)}
                    dropdownIconColor='#3C6382'
                    selectedValue={raca}
                    onValueChange={(itemValue, itemIndex) => setRaca(itemValue)}
                    >
                        {
                            racasGato.map((racasGato) => <Picker.Item
                            style={{color: '#3C6382'}}
                            key={racasGato.id}
                            label={racasGato.breed} 
                            value={racasGato.id} />)
                        }
                    </Picker>
                </View>
            }
            <TextInput style={style.input}
                placeholder='Nome'            
                placeholderTextColor='#3C6382'
                onChangeText={value => setNome(value)}
            />
            <TextInputMask
                placeholder='Data de nascimento'
                placeholderTextColor='#3C6382'
                keyboardType='numeric'
                type='datetime'
                options={{
                    format: 'DD/MM/YYYY'
                }}
                style={style.input}
                onChangeText={value => setNascimento(value)}
            />
            <View style={style.picker}>
                <Picker
                dropdownIconColor='#3C6382'
                selectedValue={sexo}
                onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
                    <Picker.Item style={{color: '#3C6382'}} key={especie.id} label='Sexo' value={null} />
                    <Picker.Item style={{color: '#3C6382'}} key={especie.id} label='Fêmea' value={false} />
                    <Picker.Item style={{color: '#3C6382'}} key={especie.id} label='Macho' value={true} />
                </Picker>
            </View>
            <View style={style.input}>
                <TextInputMask 
                    placeholder='Peso'
                    placeholderTextColor='#3C6382'
                    color='#3C6382'
                    keyboardType='numeric'
                    type='custom'
                    options={{
                        mask: '99,9kg'
                    }}
                    onChangeText={value => setPeso(value)}
                />
            </View>
        </ScrollView>
            <TouchableHighlight 
                underlayColor='#32536E'
                style={style.footer} 
                onPress={() => console.log(cadastro)}
            >
                <Image 
                    style={style.arrow} 
                    resizeMethod='scale'
                    source={require('../../assets/images/arrow.png')}
                />
            </TouchableHighlight>
        </>
    )
}