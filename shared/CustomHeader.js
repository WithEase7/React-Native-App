import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function CustomHeader({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        color: "red",
        fontWeight: "bold",
        marginTop: 28,
        textAlign: "center",
        letterSpacing: 1,
      },
      header: {
        height: 90,
      },
})