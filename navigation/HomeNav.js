import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Assets from '../app/Assets';
import Incidents from '../app/Incidents';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Home} name='Home'/>
        <Stack.Screen component={Assets} name='Assest' />
        <Stack.Screen component={Incidents} name='Incidents' />
    </Stack.Navigator>
  )
}

export default HomeNav