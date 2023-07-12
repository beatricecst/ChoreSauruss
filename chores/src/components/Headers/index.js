import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

const Headers = ({title}) => {
    return (
        <Text style={styles.text}>{title}</Text>
    )
}
export default Headers;