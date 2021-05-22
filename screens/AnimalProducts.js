import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { globalStyle } from "../Global";
import CustomHeader from "../shared/CustomHeader";

function AnimalProducts({ navigation }) {
  return (
    <View style={globalStyle.container}>
      <View>
        <CustomHeader title={"Animal Products"} navigation={navigation} />
          <View style={styles.box}>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/milk.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Milk</Text>
            </View>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/curd.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Curd</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/butter.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Butter</Text>
            </View>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/paneer.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Paneer</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/wool.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Wool</Text>
            </View>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/cheese.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Cheese</Text>
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 140,
    height: 100,
    marginHorizontal: 28,
    backgroundColor: "white",
  },

  product: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  imgBox: {

  },
  box: {
    flexDirection: "row",
    flexDirection: "row",
    marginVertical: 30,
  }
});
export default AnimalProducts;
