import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

const AddButt = ({title, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.butt}>
            <Text style={styles.buttText}>{title}</Text>
            <Image style={styles.image} source={require('../assets/plus.png')} />
        </Pressable>
    )
}
export default AddButt;

const styles = StyleSheet.create({
    butt: {
        backgroundColor: '#FFFFFF',
        width: 150,
        height: 30,
        borderRadius: 10,
        marginTop: 60,
        marginBottom: 20,
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 30,

    },
    buttText: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Al Nile',
        textAlign: 'center',
        marginLeft: 10,
    },
    image: {
        width:24,
        height: 24,
        marginLeft: 30,
    }
})

