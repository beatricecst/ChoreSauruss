import React from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const ParaInput = ({ label, placeholder, onChangeText, multiline = false }) => {
  return (
    <SafeAreaView>
      <View>
        {/* Bold label */}
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={[styles.inputBox, multiline && styles.multilineInput]} // Apply a different style for multiline input
          placeholder={placeholder}
          onChangeText={onChangeText}
          multiline={multiline} // Set multiline prop to true
          numberOfLines={4} // You can set the number of lines you want to display initially (optional)
        />
      </View>
    </SafeAreaView>
  );
};

export default ParaInput;
