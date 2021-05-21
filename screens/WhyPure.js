import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../Global";
import CustomHeader from "../shared/CustomHeader";

function WhyPure({ navigation }) {
  return (
    <View style={globalStyle.container}>
      <View>
        <CustomHeader title={"Why Pure"} navigation={navigation} />
        <View style={styles.textBox}>
          <Text style={styles.paragraph}>
           
            Its sad that for the sake of profit people compromise with the
            health as farmers use more and more pesticides to produce more.
            There is-non existent availability of chemical free food. In today's
            world, health is the main concern of almost every individual.
          </Text>
         
         <Image source={require("../assets/pure.jpg")} style={styles.img}/>
          <Text style={styles.paragraph}>
            A healthy diet is essential for good health and nutrition. Organic
            foods often have more beneficial nutrients, such as antioxidants,
            than their conventionally-grown counterparts. Chemical free food
            protect the body against aging, cardiovascular disease, and cancer.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    marginHorizontal: 25,
    marginTop: 20,
  },
  paragraph: {
    color: "white",
    fontSize: 18,
    letterSpacing: 0.5,
    textAlign: "justify",
  },
  img: {
      width: 340,
      height: 200,
      marginVertical: 20,
      alignSelf: "center",
      borderColor: "#ddd",
      borderWidth: 1,
  }
});

export default WhyPure;
