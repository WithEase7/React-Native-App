import { Formik } from "formik";
import React from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { globalStyle } from "../Global";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../shared/CustomButton";

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
        onSubmit={(values, actions) => {
          actions.resetForm();
          // onPress();
        }}
      >
        {(props) => (
          <ScrollView>
            <View style={styles.form}>
              <TextInput
                style={{ ...globalStyle.input, ...styles.input }}
                placeholder="Enter your email"
                autoCapitalize="none"
                keyboardType="email-address"
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
            <CustomButton text={"Login"} onPress={props.handleSubmit} />
          </ScrollView>
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
    marginBottom: 30,
    backgroundColor: "white",
  },
});

export default Login;
