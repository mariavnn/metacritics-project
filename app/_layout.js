import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Slot } from 'expo-router';
import { Provider } from '../context/auth';

export default function Layout() {
  return (
    <View style={styles.container}>
      <Provider>
        <Slot />
      </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       flex: 1, 
       backgroundColor: "black", 
    }
})