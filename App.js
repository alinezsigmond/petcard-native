import React from 'react'
import { StatusBar, Text, TextInput } from 'react-native'

//import Button from './components/Button/Button'
import Error from './pages/404/404'
import Cadastro from './pages/Cadastro/Cadastro'
import Login from './pages/Login/Login'

export default function App() {

  return(
    <>
    <StatusBar backgroundColor="#3C6382" barStyle='light-content' />
    {/* <Error /> */}
    {/* <Cadastro /> */}
    {/* <Login /> */}
    <Cadastro />
    </>
  )
}