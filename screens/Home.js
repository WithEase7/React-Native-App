import React, {useState} from "react";
import { globalStyle } from "../Global";
import { View, Text, StyleSheet, Modal } from "react-native";
import CustomButton from "./shared/CustomButton";

function Home() {

    const [modal_l, setModal_l] = useState(false)
    const [modal_r, setModal_r] = useState(false)

    const loginHandler = ()=> {
        setModal_l(true)
    }

  return (
    <View style={globalStyle.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>PUREFOUND</Text>
      </View>
      <View style={styles.tagBox}>
        <Text style={styles.tagLine}>Lets you eat food better</Text>
        <Modal visible={modal_l}>
            <Text>Hello Modal</Text>
        </Modal>
        <CustomButton text={'Login'} onPress={loginHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    marginTop: 28,
    textAlign: "center",
    letterSpacing: 1,
  },
  tagBox: {
    // marginVertical: 60,
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#717",
paddingVertical: 330,
    // borderWidth: 5,
  },
  tagLine: {
    fontSize: 40,
    fontWeight: "bold",
    // backgroundColor: "red",
    textAlign: "center",
    color: "white",
    position: "absolute",
    top: 100,
  },
  header: {
    height: 90,
    // backgroundColor: "#333",
},
});
export default Home;
