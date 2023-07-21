import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  text: {
    fontSize: 15,
    marginBottom: 15,
  },
  textInput: {
    marginBottom: 100,
    flex: 1,
    flexDirection: "row",
  },
  inputBox: {
    width: 300,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlignVertical: "top", // This will align the text to the top of the input box
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  multilineInput: {
    height: 100, 
    flex: 1,
  },
});
