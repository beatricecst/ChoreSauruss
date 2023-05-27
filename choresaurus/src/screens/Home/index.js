import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center'
    }
})