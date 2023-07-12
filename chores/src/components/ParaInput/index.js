import React from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const ParaInput = ({label, placeholder, onChangeText}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>{label}</Text>
                <TextInput placeholder={placeholder} style={styles.textInput} multiline numberOfLines={2} onChangeText={onChangeText}>

                </TextInput>
            </View>
        </SafeAreaView>
    )
}
export default ParaInput;