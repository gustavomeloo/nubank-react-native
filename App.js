import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from './src/pages/Main'
const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <>
      <StatusBar barStyle='light-content' backgroundColor="#8B10AE"/>

      <NavigationContainer  >
        <Stack.Navigator screenOptions={{ headerShown : false}}>
          <Stack.Screen component={Main} name='main' />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App