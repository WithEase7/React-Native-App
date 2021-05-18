import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.app}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  app:{
    flex: 1,
    backgroundColor: "#1a1818"
  }
})


