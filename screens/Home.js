import React, { useState } from "react";
import { globalStyle } from "../Global";
import { View, Text, StyleSheet, Modal } from "react-native";
import CustomButton from "./shared/CustomButton";
import CustomHeader from "./shared/CustomHeader";

function Home() {
  const [modal_l, setModal_l] = useState(false);
  const [modal_r, setModal_r] = useState(false);

  const loginHandler = () => {
    setModal_l(true);
  };
  const registerHandler = () => {
    setModal_r(true);
  };

  return (
    <View style={globalStyle.container}>
      <View>
        <CustomHeader title={"PUREFOUND"}/>
        <Text style={styles.tagLine}>Lets you eat food better</Text>
        <Modal visible={modal_l} animationType="slide">
          <Text>Login Modal</Text>
        </Modal>
        <Modal visible={modal_r} animationType="slide">
          <Text>Register Modal</Text>
        </Modal>
        <View style={styles.userInfo}>
          <CustomButton text={"Login"} onPress={loginHandler} />
          <CustomButton text={"Register"} onPress={registerHandler} />     
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tagLine:{
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 120,
  },
  userInfo: {
    marginTop: 200,
  }
});
export default Home;
