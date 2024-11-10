import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: 'white'
    }
})