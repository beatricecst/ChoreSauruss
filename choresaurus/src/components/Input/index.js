// import React from "react";
// import { TextInput, View, Text } from "react-native";
// import { styles } from "./styles";

// const Input = ({label, placeholder}) => {
//     return (
//         <View>
//             <Text style={styles.text}>{label}</Text>
//             <TextInput placeholder={placeholder} style={styles.textInput}>

//             </TextInput>
//         </View>
//     )
// }
// export default Input;

import { View, Text, TextInput, StyleSheet } from 'react-native';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  placeholder,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 4,
  },

  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    fontSize: 16,
  },
});