import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Signup_Button = ({title}) => {
    return (
        <TouchableOpacity activeOpacity={0.4} style={styles.butt}>
            <Text style={styles.buttText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default React.memo(Signup_Button);