import React from 'react'
import { StatusBar, Text, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Error from './pages/404/404'
import Cadastro from './pages/Cadastro/Cadastro'
import Index from './pages/Index/Index'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import MeusPets from './pages/MeusPets/MeusPets'
import CadastroPet from './pages/CadastroPet/CadastroPet'
import Menu from './components/Menu/Menu'

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  function DrawerScreens() {
    return (
      <Drawer.Navigator drawerContent={props => <Menu {...props} nome='Aline Zsigmond' cidade='Foz do Iguaçu' />}>
        <Drawer.Screen name='Home' component={Dashboard} />
        <Drawer.Screen name='Meus pets' component={MeusPets} />
      </Drawer.Navigator>
    )
  }
  return(
    <>
    <StatusBar backgroundColor="#3C6382" barStyle='light-content' />
    {/* <MeusPets /> */}
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Index' component={Index} />
        <Stack.Screen options={{ headerShown: false }} name='Erro' component={Error} />
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='Cadastro' component={Cadastro} />
        <Stack.Screen options={{ headerShown: false }} name='Cadastro pet' component={CadastroPet} />
        <Stack.Screen options={{ headerShown: false }} name='Dashboard' component={DrawerScreens} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}