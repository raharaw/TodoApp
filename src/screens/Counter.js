import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Button, ActivityIndicator } from 'react-native'; //Safe area view untuk handling tipe layar handphone yang berbeda2
import CounterButton from "../components/molecules/Buttons";

const CounterScreen = () => {
    const [valueCounter, setValueCounter] = useState(0)
    const [userData, setUserData] = useState({name: ''})
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        console.log('use effect triggered')
        return () => console.log('unmounted')
    }, [valueCounter])

    useEffect(() => {
        setLoading(true)
        console.log('fetch data user')
        setTimeout(() => {
            console.log('get data user')
            setUserData({ name: 'Rahardian'})
            setLoading(false)
        }, 5000)
    }, [])

    const inc = () => {
        setValueCounter(prevState => {
            console.log('prevState', prevState)
            return prevState + 1
        })
        console.log('increment', valueCounter)
    }

    const dec = () => {
        setValueCounter(prevState => {
            console.log('prevState', prevState)
            return prevState - 1
        })
        console.log('decrement', valueCounter)
    }

    const reset = () =>{
        setValueCounter(0)
        console.log('reset')
    }

    if (isLoading) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ActivityIndicator size='large' color='blue' />
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>{`${userData.name}'s Simple Text Counter in React Native`}</Text>
                <Text style={styles.counterText}>{valueCounter}</Text>
                <CounterButton onPressInc={inc} onPressDec={dec}/>
                <Button title="Reset" color='#841584' onPress={reset}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0e0e0e',
        textAlign: 'center'
    },
    counterText: {
        fontSize: 82,
        fontWeight: 'bold',
        color: '#0e0e0e',
        textAlign: 'center'
    },
})

//npx react-native init <nama_project>
export default CounterScreen