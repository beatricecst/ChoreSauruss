import React from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";

const Input = ({label, placeholder}) => {
    return (
        <View>
            <Text style={styles.text}>{label}</Text>
            <TextInput placeholder={placeholder} style={styles.textInput}>

            </TextInput>
        </View>
    )
}
export default Input;