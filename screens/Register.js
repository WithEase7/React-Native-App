import { Formik } from "formik";
import React from "react";
import { StyleSheet, TextInput, View, Text, ScrollView, FlatList } from "react-native";
import { globalStyle } from "../Global";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../shared/CustomButton";
import * as yup from "yup";

const LoginSchema = yup.object({
  fullname: yup.string(),
  email: yup.string(),
  phone: yup.string().min(10).max(10),
  password: yup.string(),
  confirm_password: yup.string(),
});

function Register({ onPress }) {
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
                placeholder="Full Name"
                onChange={props.handleChange("fullname")}
                autoCapitalize="none"
                value={props.values.fullname}
                onBlur={props.handleBlur("fullname")}
              />
              <Text style={globalStyle.errorText}>
                {props.touched.fullname && props.errors.fullname}
              </Text>

              <TextInput
                style={{ ...globalStyle.input, ...styles.input }}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email Address"
                onChange={props.handleChange("email")}
                value={props.values.email}
                onBlur={props.handleBlur("email")}
              />
              <Text style={globalStyle.errorText}>
                {props.touched.email && props.errors.email}
              </Text>

              <TextInput
                keyboardType="numeric"
                style={{ ...globalStyle.input, ...styles.input }}
                placeholder="Phone No."
                onChange={props.handleChange("phone")}
                value={props.values.phone}
                onBlur={props.handleBlur("phone")}
              />
              <Text style={globalStyle.errorText}>
                {props.touched.phone && props.errors.phone}
              </Text>

              <TextInput
                style={{ ...globalStyle.input, ...styles.input }}
                placeholder="Password"
                onChange={props.handleChange("password")}
                autoCapitalize="none"
                value={props.values.password}
                onBlur={props.handleBlur("password")}
              />
              <Text style={globalStyle.errorText}>
                {props.touched.password && props.errors.password}
              </Text>

              <TextInput
                style={{ ...globalStyle.input, ...styles.input }}
                placeholder="Confirm Password"
                onChange={props.handleChange("confirm_password")}
                autoCapitalize="none"
                value={props.values.confirm_password}
                onBlur={props.handleBlur("confirm_password")}
              />
              <Text style={globalStyle.errorText}>
                {props.touched.confirm_password && props.errors.confirm_password}
              </Text>
            </View>
            <CustomButton text={"Register"} onPress={props.handleSubmit} />
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
    paddingVertical: 40,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "white",
  },
});

export default Register;
