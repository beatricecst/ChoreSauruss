import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

const JobListButt = ({title, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.butt}>
            <Text style={styles.buttText}>{title}</Text>
            <Image style={styles.image} source={require('../assets/browse.png')} />
        </Pressable>
    )
}
export default JobListButt;

const styles = StyleSheet.create({
    butt: {
        backgroundColor: '#FFFFFF',
        width: 200,
        height: 50,
        borderRadius: 15,
        marginTop: 60,
        marginBottom: 20,
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 30,
        justifyContent: "center",

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

