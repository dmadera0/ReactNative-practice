import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

export default function LoginForm (props){
    return (
        <View style = {styles.container}> 
            <Text>{props.text}</Text>
            <TextInput></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})

