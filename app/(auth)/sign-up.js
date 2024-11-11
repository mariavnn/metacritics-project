import { View, Text, StyleSheet } from "react-native";
import React from "react";
import * as yup from 'yup';
import { Formik } from 'formik';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Screen } from "../../components/Screen";
import { Logo } from "../../components/Logo";
import { TextApp } from "../../components/TextApp";
import { InputApp } from "../../components/InputApp";
import { ButtonApp } from "../../components/Button";
import colorText from "../../constants/Text";

export default function Register() {
  const registerValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <Screen>
      <View style={styles.container}>
        <Logo/>
        <TextApp
          key={'Register'}
          text={'Sign Up!'}
          type={'title'}
        />
        <Formik
          initialValues={{name: '', email: '', password: '', confirmPassword: ''}}
          validationSchema={registerValidationSchema}
          onSubmit={values => {
            // Aquí puedes manejar el envío de datos
            console.log(values);
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
            <>
              <InputApp
                key={'name'}
                name="name"
                placeholder="Full Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values}
                error={errors}
                touched={touched}
              />
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
               <InputApp
                key={'confirmPassword'}
                name="confirmPassword"
                placeholder="*********"
                secureTextEntry={true}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values}
                error={errors}
                touched={touched}
              />
            </>
          )}
        </Formik>
       
        <ButtonApp
          key={'LoginBtn'}
          text={'Register'}
          type={'primary'}
          href={'home'}
        />

        <Text style={styles.subtitleText}>Register Using</Text>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitleText: {
    marginTop: 40,
    color: colorText.primary
  },
  buttonContainer:{
    marginTop: 8,
    flexDirection: 'row',
    width: "100%",
  },
  button:{
    flex: 1,
  }
});