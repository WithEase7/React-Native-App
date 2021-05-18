import React from 'react'
import{ StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function CustomButton({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  
    buttonText: {
        backgroundColor: "red",
        fontWeight: "bold",
        fontSize: 25,
        borderRadius: 10,
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 50,
        textAlign: "center"
    }
})
export default CustomButton