import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react'
import colorText from '../constants/Text';
import Colors from '../constants/Colors';

export  function InputApp({name, placeholder, secureTextEntry, onChangeText, onBlur, value, error, touched }) {
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.inputContainer}
            placeholder={placeholder}
            placeholderTextColor={colorText.standard}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value[name]}
          />
            {error[name] && touched[name] && (
              <Text style={styles.errorText}>{error[name]}</Text>
            )}
        </View>
    );
};
    
    const styles = StyleSheet.create({
      container: {
        paddingHorizontal: 20,
        marginBottom: 8,
        width: '100%',
        height: 60,
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
      focusContainer: {
        borderColor: Colors.yellowSecondary,
      },
      errorText: {
        color: colorText.error,
        alignSelf: 'flex-start',
        marginTop: 2,
        fontSize: 12,
      },
    });
    