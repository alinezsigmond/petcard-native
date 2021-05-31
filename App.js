import React from 'react'
import { StatusBar, Text, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Error from './pages/404/404'
import Cadastro from './pages/Cadastro/Cadastro'
import Index from './pages/Index/Index'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import HeaderLogged from './components/HeaderLogged/HeaderLogged'

export default function App() {
  const Stack = createStackNavigator();
  
  return(
    <>
    <StatusBar backgroundColor="#3C6382" barStyle='light-content' />
    <Dashboard />
    {/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Dashboard' component={Dashboard} />
        <Stack.Screen options={{ headerShown: false }} name='Index' component={Index} />
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='Cadastro' component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer> */}
    </>
  )
}