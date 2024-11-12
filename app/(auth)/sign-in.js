import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Pressable } from 'react-native';
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
import { Link, router } from 'expo-router';
import { Formik } from 'formik';

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
    
        <Text style={styles.title}>Login</Text>
        
        <View style={styles.inputContainer}>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={loginValidationSchema}
            onSubmit={values => {
              // Aquí puedes manejar el envío de datos
              console.log(values);
            }}
          >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
              <>
                <InputApp
                  key={'email'}
                  name="email"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values}
                  error={errors}
                  touched={touched}
                />
                <InputApp
                  key={'password'}
                  name="password"
                  placeholder="*********"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values}
                  error={errors}
                  touched={touched}
                />
              </>
            )}
          </Formik>
        </View>

        <TouchableOpacity style={styles.passwordContainer}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <ButtonApp
          key={'LoginBtn'}
          text={'Login'}
          type={'primary'}
          href={'home'}
        />

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
      width: '100%',
      justifyContent:'flex-start',
      color: colorText.primary,
      fontSize: 24,
      marginLeft: 40,
      marginTop: 40,
      marginBottom: 8,
      fontWeight: 'bold',
    },
    container:{
      flex:1, 
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
      
    },
    inputContainer:{
      width: '100%',
    },
    passwordContainer: {
      alignSelf: 'flex-end',
      marginRight: 20,
      marginBottom:30,
      
    },
    forgotPassword: {
      color: colorText.primary,
      fontSize: 12,
    },
    subtitleText: {
      color: colorText.primary,
      marginTop:40,
      marginBottom: 4,
    },
    buttonContainer:{
      flexDirection: 'row',
      width: "100%",
    },
    button:{
      flex: 1,
    }
})