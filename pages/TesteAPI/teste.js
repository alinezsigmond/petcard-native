import React from 'react'
import api from '../../api'
import { Button } from 'react-native'

export default function Teste(){
  api.get('star%20wars')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    return(
        <Button 
        title='Mostrai'
        onPress={() => console.log('clicou, nenê')}
        />
    )
}