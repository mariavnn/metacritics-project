import { View, Text, StyleSheet } from 'react-native'
import colorText from '../constants/Text'

export function TextApp({text, type}) {

    const getTextStyles = () => {
        switch (type) {
            case "standard":
                return styles.standard
            case "completed":
                return styles.completed
            case "error":
                return styles.error
            case "title":
                return styles.title
            case "subtitle":
                return styles.subtitle
            default:
                return styles.text    
        }
    }
  return (
    <View>
      <Text style={[getTextStyles()]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    standard: {
        fontSize: 8,
        color: colorText.standard,
        fontWeight: "medium",
    },
    completed:{
        fontSize: 8,
        color: colorText.completed,
        fontWeight: "medium",
    },
    error:{
        fontSize: 8,
        color: colorText.error,
        fontWeight: "medium"
    },
    title:{
        marginVertical: 25,
        fontSize: 24,
        fontWeight: 'bold',
        color: colorText.primary, 
    },
    subtitle:{
        fontSize: 7, 
        color: colorText.secondary,
    }
})