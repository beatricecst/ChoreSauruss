import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";


const JobListButt = ({title, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.butt}>
            <Image source={require('../assets/deeno.gif')} style={styles.profileImg} />
        </Pressable>
    )
}
export default JobListButt;

const styles = StyleSheet.create({
    butt: {
        backgroundColor: '#FFFFFF',
        width: 200,
        height: 200,
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
        textAlign: 'justify',
        marginLeft: 10,
    },
    profileImg: {
        height: 150,
        width: 150,
        borderRadius: 0,
      },
    image: {
        width:24,
        height: 24,
        marginLeft: 30,
    }
})

