import React from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const ParaInput = ({label, placeholder, onChangeText}) => {
    return (
        <SafeAreaView>
            <View>
      {/* Bold label */}
      <Text style={styles.label}>{label}</Text>
      {/* Outlined text input box */}
      <TextInput
        style={styles.inputBox}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
        </SafeAreaView>
    )
}
export default ParaInput;