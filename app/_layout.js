import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Slot, Stack } from 'expo-router';
import { Provider } from '../context/auth';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{headerShown: false, title: 'Welcome', headerBackground:'#000'}}
      />
    </Stack>
  )
}

const styles = StyleSheet.create({
    container:{
       flex: 1, 
       backgroundColor: "black", 
    }
})