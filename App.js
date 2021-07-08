import React from 'react'
import { StatusBar, Text, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Error from './pages/404/404'
import Cadastro from './pages/Cadastro/Cadastro'
import Index from './pages/Index/Index'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import MeusPets from './pages/MeusPets/MeusPets'
import CadastroPet from './pages/CadastroPet/CadastroPet'
import Menu from './components/Menu/Menu'

import api from './api'
import HeaderSmall from './components/HeaderSmall/HeaderSmall'
import TesteLogin from './pages/TesteLogin/TesteLogin'
import TestePets from './pages/TestePets/TestePets'

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  function DrawerScreens() {
    return (
      <Drawer.Navigator drawerContent={props => <Menu {...props} nome='Aline Zsigmond' cidade='Foz do Iguaçu' />}>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Meus pets' component={MeusPets} />
      </Drawer.Navigator>
    )
  }
  return(
    <>
    <StatusBar backgroundColor="#3C6382" barStyle='light-content' />
    {/* <TesteLogin /> */}
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{ headerShown: false }} name='Teste login' component={TesteLogin} /> */}
        <Stack.Screen options={{ headerShown: false }} name='Index' component={Index} />
        <Stack.Screen options={{ headerShown: false }} name='Erro' component={Error} />
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='Cadastro' component={Cadastro} />
        <Stack.Screen options={{ headerShown: false }} name='Cadastro pet' component={CadastroPet} />
        <Stack.Screen options={{ headerShown: false }} name='Teste pets' component={TestePets} />
        <Stack.Screen options={{ headerShown: false }} name='Home' component={DrawerScreens} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}