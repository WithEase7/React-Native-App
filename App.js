import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Routes/Drawer'

export default function App() {
  return (
    <View style={styles.app}>
      <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  app:{
    flex: 1,
  }
})


