import React, { useState } from "react";
import { globalStyle } from "../Global";
import { View, Text, StyleSheet, Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import CustomButton from "../shared/CustomButton";
import CustomHeader from "../shared/CustomHeader";
import Login from "./Login";
import Register from "./Register";


function Home({navigation}) {
  const [modal_l, setModal_l] = useState(false);
  const [modal_r, setModal_r] = useState(false);

  const loginHandler = () => {
    setModal_l(true);
  };
  const registerHandler = () => {
    setModal_r(true);
  };
  const goBack = () => {
    setModal_l(false);
    setModal_r(false);
  };

  return (
    <View style={globalStyle.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <CustomHeader title={"PUREFOUND"} navigation={navigation} />
        <Text style={styles.tagLine}>Lets you eat food better</Text>
        <Modal visible={modal_l} animationType="slide">
          <Login onPress={goBack} />
        </Modal>
        <Modal visible={modal_r} animationType="slide">
          <Register onPress={goBack} />
        </Modal>
        <View style={styles.userInfo}>
          <CustomButton text={"Login"} onPress={loginHandler} />
          <CustomButton text={"Register"} onPress={registerHandler} />
        </View>
      </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  tagLine: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 120,
  },
  userInfo: {
    marginTop: 200,
  },
});
export default Home;
