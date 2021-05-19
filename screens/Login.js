import { Formik } from "formik";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { globalStyle } from "../Global";
import { AntDesign } from "@expo/vector-icons";

function Login({ onPress }) {
  return (
    <View style={globalStyle.container}>
      <AntDesign
        name="arrowleft"
        size={24}
        style={styles.backButton}
        onPress={onPress}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {}}
      >
        {(props) => (
          <View style={styles.form}>
            <TextInput
              style={{ ...globalStyle.input, ...styles.input }}
              placeholder="Email Address"
              onChange={props.handleChange("email")}
              value={props.values.email}
            />
            <TextInput
              style={{ ...globalStyle.input, ...styles.input }}
              placeholder="Password"
              onChange={props.handleChange("password")}
              value={props.values.password}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    color: "white",
    backgroundColor: "red",
    borderRadius: 100,
    marginBottom: 10,
    paddingVertical: 7,
    paddingHorizontal: 7,
    marginHorizontal: 40,
    width: 40,
  },
  form: {
    marginHorizontal: 40,
    paddingVertical: 80,
  },
  input: {
      marginBottom: 50,
      backgroundColor: "white"
  }
});

export default Login;
