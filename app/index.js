import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import colorText from '../constants/Text'
import { Logo } from '../components/Logo';
import { TouchableOpacity } from 'react-native';
import { Screen } from '../components/Screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';


export default function Home() {
  const image = '/assets/background.jpg';
  const route = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.content}>
          <Logo/>
          <Text style={styles.text}>Inside</Text> 
          
          <View style={styles.buttonContainer}>
            {/* Buttons */}
            {/* TODO: TRATAR DE OPTIMIZAR ESTOS BOTONES */}
            <TouchableOpacity style={styles.containerBtn} onPress={() => route.push('(auth)/sign-in')}>
              <LinearGradient
                  colors={[Colors.yellowSecondary, Colors.yellowQuarteary]}
                  style={styles.button}
              > 
                  <View style={styles.contentButton}>
                      <Text style={styles.text}>Login</Text>
                  </View>
              </LinearGradient>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.containerBtn} onPress={() => route.push('(auth)/sign-up')}>
              <LinearGradient
                  colors={[Colors.yellowSecondary, Colors.yellowQuarteary]}
                  style={styles.button}
              >
                  <View style={styles.contentButton}>
                      <Text style={styles.text}>Register</Text>
                  </View>
              </LinearGradient>
            </TouchableOpacity>
            
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  containerBtn:{
    width: '50%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonContainer:{
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  image:{
    flex: 1,
  },
  text:{
    color: colorText.primary,
  },
  content:{
    flex:1,
    padding: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button:{
    height: 35,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  contentButton:{
    flexDirection: 'row',
    gap: 20,
},
})