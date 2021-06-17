import React from 'react'
import { useState } from 'react'
import { ImageBackground, View, Text, Image, TouchableHighlight } from 'react-native'
import {Picker} from '@react-native-picker/picker'
import DropDownPicker from 'react-native-dropdown-picker'
import style from './style'

import racasGato from './raca-gato.json'
import racasCachorro from './raca-cachorro.json'

export default function CadastroPet({navigation}) {
    const [especie, setEspecie] = useState(0);
    const [raca, setRaca] = useState();

    // const [open, setOpen] = useState(false);
    // const [value, setValue] = useState(null);
    // const [items, setItems] = useState();
    function hasSelected(especie) {
        if (especie == 0) {
            return false;
        } else {
            return true;
        }
    }
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
            
            <Picker
            style
            dropdownIconColor='#3C6382'
            selectedValue={especie}
            onValueChange={(itemValue) =>
              setEspecie(itemValue)
            }>
                <Picker.Item key={especie.id} label='Selecione a espécie' value={0} />
                <Picker.Item key={especie.id} label='Cachorro' value={1} />
                <Picker.Item key={especie.id} label='Gato' value={2} />
            </Picker>

            {
                (especie == 1) 
                ?
                <Picker
                enabled={hasSelected(especie)}
                dropdownIconColor='#3C6382'
                selectedValue={raca}
                onValueChange={(itemValue, itemIndex) => setRaca(itemValue)}
                >
                    {
                        racasCachorro.map((racasCachorro) => <Picker.Item
                        key={racasCachorro.id}
                        label={racasCachorro.breed} 
                        value={racasCachorro.id} />)
                    }
                </Picker> 
                :
                <Picker
                enabled={hasSelected(especie)}
                dropdownIconColor='#3C6382'
                selectedValue={raca}
                onValueChange={(itemValue, itemIndex) => setRaca(itemValue)}
                >
                    {
                        racasGato.map((racasGato) => <Picker.Item
                        key={racasGato.id}
                        label={racasGato.breed} 
                        value={racasGato.id} />)
                    }
                </Picker>
            }
            <TouchableHighlight onPress={() => console.log({especie})}>
                <Text>Show me the answers</Text>
            </TouchableHighlight>
        </View>
    )
}