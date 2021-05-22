import { Formik } from "formik";
import React from "react";
import { TextInput, View, StyleSheet, ScrollView, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyle } from "../Global";
import CustomButton from "../shared/CustomButton";
import CustomHeader from "../shared/CustomHeader";
import * as yup from "yup";

const ContactSchema = yup.object({
  fullname: yup.string().required("Required"),
  email: yup.string().required("Required").email("Enter a valid email"),
  message: yup.string().required("Required").min(10),
});

function ContactUs({ navigation }) {
  return (
    <View style={globalStyle.container}>
      <View>
        <CustomHeader title={"Contact Us"} navigation={navigation} />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Formik
          initialValues={{ fullname: "", email: "", message: "" }}
          onSubmit={(values, actions) => {
            actions.resetForm();
          }}
          validationSchema={ContactSchema}
        >
          {(props) => (
            <ScrollView>
              <View style={styles.form}>
                <TextInput
                  style={{ ...globalStyle.input, ...styles.input }}
                  placeholder="Full Name"
                  onChange={props.handleChange("fullname")}
                  value={props.values.fullname}
                  onBlur={props.handleBlur("fullname")}
                />
                <Text style={styles.errorText}>
                  {props.touched.fullname && props.errors.fullname}
                </Text>

                <TextInput
                  style={{ ...globalStyle.input, ...styles.input }}
                  placeholder="Email Address"
                  onChange={props.handleChange("email")}
                  value={props.values.email}
                  onBlur={props.handleBlur("email")}

                />
                <Text style={styles.errorText}>
                  {props.touched.email && props.errors.email}
                </Text>

                <TextInput
                  multiline
                  style={{ ...globalStyle.input, ...styles.input }}
                  placeholder="Type your message"
                  onChange={props.handleChange("message")}
                  value={props.values.message}
                  onBlur={props.handleBlur("message")}
                />
                <Text style={styles.errorText}>
                  {props.touched.message && props.errors.message}
                </Text>
              </View>
              <CustomButton text={"Send"} onPress={props.handleSubmit} />
            </ScrollView>
          )}
        </Formik>
      </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default ContactUs;
