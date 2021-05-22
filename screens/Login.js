import { Formik } from "formik";
import React from "react";
import { ScrollView, StyleSheet, TextInput, View, Text } from "react-native";
import { globalStyle } from "../Global";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../shared/CustomButton";
import * as yup from "yup";

const LoginSchema = yup.object({
  email: yup.string().required("Required").email("Enter valid email"),
  password: yup.string().required("Required"),
});

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
        validationSchema={LoginSchema}
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
              <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>
              <TextInput
                style={{ ...globalStyle.input, ...styles.input }}
                placeholder="Password"
                onChange={props.handleChange("password")}
                value={props.values.password}
              />
              <Text style={styles.errorText}>{props.touched.password && props.errors.email}</Text>

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
    marginBottom: 10,
    backgroundColor: "white",
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 30,
    textAlign:"center",
  }
});

export default Login;
