import React from 'react'
import { StatusBar } from 'react-native'

//import Button from './components/Button/Button'
import Error from './pages/404/404'
import Login from './pages/Login/Login'

export default function App() {
  return(
    //<Button text="Login" />
    <>
    <StatusBar backgroundColor="#3C6382" barStyle='light-content' />
    {/* <Error /> */}
    <Login />
    </>
  )
}