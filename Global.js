import { StyleSheet } from "react-native";


export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:30,
  },
  titleText: {
    // fontFamily:"serif",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
      marginVertical: 8,
      lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#abe",
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 10
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign:"center",
  },
  
});

