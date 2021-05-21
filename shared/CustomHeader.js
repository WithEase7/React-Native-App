import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function CustomHeader({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={35}
        style={styles.menu}
        onPress={openMenu}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

export default CustomHeader;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    // marginTop: 28,
    // marginHorizontal: 65,
    // textAlign: "center",
    alignSelf: "center",
    letterSpacing: 1,
  },
  header: {
    height: 90,
    flexDirection: "row",
    justifyContent: "center"
  },
  menu: {
    color: "white",
    // marginTop: 32,
    // marginLeft: 10,
    alignSelf: "center",
    position: "absolute",
    left: 20,

  },
});
