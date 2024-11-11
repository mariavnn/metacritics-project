import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import React from 'react'
import * as yup from 'yup';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Logo } from '../../components/Logo'
import { Screen } from '../../components/Screen'
import { TextApp } from '../../components/TextApp'
import { InputApp } from '../../components/InputApp';
import colorText from '../../constants/Text';
import Colors from '../../constants/Colors';
import {  ButtonApp } from '../../components/Button';

export default function Login() {

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  

  return (
    <Screen>
      <View style={styles.container}>
        <Logo/>
        <TextApp 
          key={'Login'}
          text={'Login'}
          type={'title'}
        />
        <InputApp
          key={'email'}
          name="email"
          placeholder="Email"
          validationSchema={loginValidationSchema}
          initialValues={{ email: '' }}
        />
        <InputApp
          key={'password'}
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          validationSchema={loginValidationSchema}
          initialValues={{ password: '' }}
          //handleNavigation={() => navigation.navigate('Forget')}
        />

        <TouchableOpacity style={styles.passwordContainer}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      
        <ButtonApp
          key={'LoginBtn'}
          text={'Login'}
          type={'primary'}
          
        />

        <View style={styles.signUpContainer} >
          <Text style={styles.subtitleText}> Don't have an account?</Text>
          <TouchableOpacity >
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitleText}>Login Using</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <ButtonApp
              key={'GoogleBtn'}
              text={'Google'}
              type={'secondary'}
              icon={<AntDesign name="google" size={20} color="#fff" />}
            />
          </View>

          <View style={styles.button}>
            <ButtonApp
              key={'FacebookBtn'}
              text={'Facebook'}
              type={'secondary'}
              icon={<FontAwesome name="facebook" size={20} color="#fff" />}
            />
          </View>
          
        </View>
      </View>
    </Screen>
  
  )
}

const styles = StyleSheet.create({
    title:{
      marginBottom: 10,
    },
    container:{
      flex:1, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    passwordContainer: {
      height: 20,
      alignSelf: 'flex-end',
      marginRight: 20,
    },
    forgotPassword: {
      color: colorText.primary,
      fontSize: 12,
    },
    signUpContainer: {
      marginTop: 30,
      marginBottom: 40,
      alignItems: 'center',
      flexDirection: 'row', 
      gap: 5,
    },
    subtitleText: {
      color: colorText.primary
    },
    signUpLink:{
      color: Colors.yellowSecondary
    },
    buttonContainer:{
      marginTop: 8,
      flexDirection: 'row',
      width: "100%",
    },
    button:{
      flex: 1,
    }
})