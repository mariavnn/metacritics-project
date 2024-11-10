import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import React from 'react'
import { Logo } from '../../components/Logo'
import { Screen } from '../../components/Screen'
import { TextApp } from '../../components/TextApp'
import { InputApp } from '../../components/InputApp';

export default function Login() {

 

  return (
    <Screen>
      <View style={styles.container}>
        <Logo/>
        <TextApp 
          key={'Login'}
          text={'Login'}
          type={'title'}
        />
        <InputApp/>
      </View>
    </Screen>
  
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: 'white'
    },
})