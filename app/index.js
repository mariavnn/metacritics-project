import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Login from './(auth)/sign-in'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => signOut()}>Sign Out</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: '#fff',
  }
})