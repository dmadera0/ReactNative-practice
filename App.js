import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LoginForm from './LoginForm'
import NameList from './NameList'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.text}>this is a new line</Text>
      <StatusBar style="auto" />
      {/* <ScrollView horizontal ={true}/><ScrollView></ScrollView> */}
      <LoginForm text='text' />
      <NameList />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#FF5733'
  }
});
