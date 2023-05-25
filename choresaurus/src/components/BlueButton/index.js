import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const BlueButton = ({title, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={onPress} style={styles.butt}>
            <Text style={styles.buttText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default React.memo(BlueButton);