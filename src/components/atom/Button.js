import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonComponent = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.button, props.type === 'increment' ? styles.buttonIncrement : styles.buttonDecrement]}>
            <Text style={styles.buttonText}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff'
    },
    button: {
        padding: 16,
        borderRadius: 8,
        minWidth: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'ffffff'
    },
    buttonIncrement: {
        backgroundColor: '#73eedc',
    },
    buttonDecrement: {
        backgroundColor: '#5f1a37',
    }
})

export default ButtonComponent