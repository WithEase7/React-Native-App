import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { globalStyle } from '../Global'
import CustomHeader from '../shared/CustomHeader'

function CropProducts({navigation}) {
    return (
        <View style={globalStyle.container}>
            <View>
                <CustomHeader title={"Crop Products"} navigation={navigation} />
                <View style={styles.box}>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/bajra.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Pearl Millet</Text>
            </View>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/wheat.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Wheat</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/maize.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Maize</Text>
            </View>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/peanut.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Peanut</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/vegetables.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Vegetables</Text>
            </View>
            <View style={styles.imgBox}>
              <Image
                source={require("../assets/fruits.png")}
                style={styles.img}
              />
              <Text style={styles.product}>Fruits</Text>
            </View>
          </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
      width: 100,
      height: 100,
      marginHorizontal: 50,
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

export default CropProducts
