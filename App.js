import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimalProducts from './screens/AnimalProducts';
import Home from './screens/Home';
import Navigator from './Routes/Drawer'

export default function App() {
  return (
    <View style={styles.app}>
      {/* <Home/> */}
      {/* <AnimalProducts/> */}
      <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  app:{
    flex: 1,
    // backgroundColor: "#1a1818"
  }
})


