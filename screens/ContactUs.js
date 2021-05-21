import { Formik } from "formik";
import React from "react";
import { TextInput, View, StyleSheet, ScrollView } from "react-native";
import { globalStyle } from "../Global";
import CustomButton from "../shared/CustomButton";
import CustomHeader from "../shared/CustomHeader";

function ContactUs({ navigation }) {
  return (
    <View style={globalStyle.container}>
      <View>
        <CustomHeader title={"Contact Us"} navigation={navigation} />
      </View>
      <View>
        <Formik
          initialValues={{ fullname: "", email: "", message: "" }}
          onSubmit={(values, actions) => {
            actions.resetForm();
          }}
        >
          {(props) => (
            <ScrollView>
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
                  multiline
                  style={{ ...globalStyle.input, ...styles.input }}
                  placeholder="Type your message"
                  onChange={props.handleChange("message")}
                  value={props.values.message}
                />
              </View>
              <CustomButton text={"Send"} onPress={props.handleSubmit}/>
            </ScrollView>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 40,
    paddingVertical: 80,
  },
  input: {
    marginBottom: 20,
    backgroundColor: "white",
  },
});

export default ContactUs;
