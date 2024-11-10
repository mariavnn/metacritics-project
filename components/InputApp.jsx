import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';
import { Formik } from 'formik';
import React from 'react'
import colorText from '../constants/Text';
import Colors from '../constants/Colors';

export  function InputApp() {
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
            <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '' }}
            >
            {({
                handleChange,
                handleSubmit,
                handleBlur,
                values,
                errors,
                touched,

            }) => (
                <>
                    <View style={styles.container}>
                        <TextInput
                            style={[styles.inputContainer]}
                            placeholder="Email"
                            placeholderTextColor={colorText.standard}
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            
                        />
        
                        {errors.email && touched.email &&(
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}
                    </View>
                    

                    <View style={styles.container}>

                        <TextInput
                            style={styles.inputContainer}
                            placeholder="Password"
                            placeholderTextColor={colorText.standard}
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                           
                        <View style={styles.passwordContainer}>
                            {errors.password && touched.password && (
                                <Text style={styles.errorText}>{errors.password}</Text>
                            )}
                            <TouchableOpacity style={{flex: 1, justifyContent:'flex-end'}}onPress={() => navigation.navigate('Forget')}>
                                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                
                    
                    <TouchableOpacity style={styles.signUpContainer} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signUp}>
                        Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </>
            )}
            </Formik> 
    
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
        paddingHorizontal: 20,
        height: 70,
        width:  '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
         width: '100%',
        backgroundColor: Colors.grayTerciary,
        borderRadius: 15,
        paddingHorizontal: 10,
        color: colorText.primary,
        borderColor: Colors.graySecondary,
        borderWidth: 1,
    },
    focusContainer:{
        border: Colors.yellowSecondary,
    },
    passwordContainer:{
        flexDirection: 'row',
        height:20,
        justifyContent:'space-between'
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: '100%',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        color: colorText.primary,
        fontSize: 12,
    },
    signUpContainer:{
        alignItems: 'center',
    },
    signUp: {
      color: colorText.primary,
    },
    signUpLink: {
      color: colorText.secondary,
    },
    errorText: {
      color: colorText.error,
      alignSelf: 'flex-start',
      marginBottom: 10,
      marginTop: 2,
      fontSize: 12,
    },
})