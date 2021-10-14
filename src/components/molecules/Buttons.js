import React from "react"
import { StyleSheet, View } from 'react-native'
import ButtonComponent from "../atom/Button"

const ButtonsComponent = ({ onPressInc, onPressDec }) => {
    return (
        <View style={styles.containerButton}>
            <ButtonComponent label={'-'} onPress={onPressDec} />
            <ButtonComponent label={'+'} onPress={onPressInc} type={'increment'} />
        </View>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        marginBottom: 16,
        justifyContent: 'space-around'
    },
})

export default ButtonsComponent