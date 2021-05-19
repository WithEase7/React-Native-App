import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Formik from "formik";
import { AntDesign } from "@expo/vector-icons";
import globalStyle from "../Global"

function Register({onPress}) {
  return (
    <View style={globalStyle.container}>
      <AntDesign
        name="arrowleft"
        size={24}
        style={styles.backButton}
        onPress={onPress}
      />
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          phone: "",
          password: "",
          confirm_password: "",
        }}
        onSubmit={(values) => {}}
      >
        {(props) => (
          <View style={styles.form}>
            <TextInput
              style={{ ...globalStyle.input, ...styles.input }}
              placeholder="Full Name"
              onChange={props.handleChange("fullname")}
              value={props.values.fullname}
            />
            <TextInput
              style={{ ...globalStyle.input, ...styles.input }}
              placeholder="Email Address"
              onChange={props.handleChange("email")}
              value={props.values.email}
            />
            <TextInput
              style={{ ...globalStyle.input, ...styles.input }}
              placeholder="Phone No."
              onChange={props.handleChange("phone")}
              value={props.values.phone}
            />
            <TextInput
              style={{ ...globalStyle.input, ...styles.input }}
              placeholder="Password"
              onChange={props.handleChange("password")}
              value={props.values.password}
            />
            <TextInput
              style={{ ...globalStyle.input, ...styles.input }}
              placeholder="Confirm Password"
              onChange={props.handleChange("confirm_password")}
              value={props.values.confirm_password}
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
    backgroundColor: "white",
  },
});

export default Register;
