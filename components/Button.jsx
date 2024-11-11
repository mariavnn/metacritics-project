import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import colorText from '../constants/Text'
import Colors from '../constants/Colors'

export function ButtonApp({text, onPress, type, icon}) {

    const getButtonStyles = () =>{
        switch(type){
            case 'primary':
                return styles.buttonPrimary
            case 'secondary':
                return styles.buttonSecondary
            default:
                return styles.buttonPrimary
        }
    }

    return (
    <TouchableOpacity
        onPress={onPress}
        style={styles.container}
    >
        {type === 'primary' ? ( <LinearGradient
            colors={[Colors.yellowSecondary, Colors.yellowQuarteary]}
            style={[styles.button, getButtonStyles()]}
        >
            <View style={styles.content}>
                {icon}
                <Text style={styles.text}>{text}</Text>
            </View>
        </LinearGradient>):(
            <View style={[styles.button, getButtonStyles()]}>
                <View style={styles.content}>
                    {icon}
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        )}
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    button:{
        height: 35,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 20,
    },
    content:{
        flexDirection: 'row',
        gap: 20,
    },
    text:{
        fontSize: 16,
        color: colorText.primary,
        fontWeight: 'bold',
    },
    buttonPrimary:{
        //EL FONDO DEBE IR CON LINEAR GRADIENT
    },
    buttonSecondary:{
        flex: 1,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: Colors.yellowTerciary,
        paddingVertical: 6,
        marginHorizontal: 4,
    }
})