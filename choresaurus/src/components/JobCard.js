import React from "react";
import { View, Text } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";

const JobCard = ({item, onPress}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.userName} made a request!</Text>
            <Text style={styles.text}>Start: {item.start}</Text>
            <Text style={styles.text}>End: {item.end}</Text>
            <Text style={styles.text}>Job Description: {item.desc}</Text>
            <TouchableOpacity onPress={() => {
                        Alert.alert(`Talk to ${item.userName} now!`, `Add ${item.userName} under the messages tab`)
                    }} style={styles.butt}>
                <Text style={styles.buttText}>Accept job</Text>
            </TouchableOpacity>
        </View>
    )
};

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: deviceWidth - 50,
        height: 170,
        backgroundColor: '#b2d3c2',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOffset: {width:5, height:5},
        elevation: 10,
        shadowRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'center',
        padding: 10,

    },
    text: {
        color: '#000',
        padding: 5,
    },
    butt: {
        backgroundColor: '#a7c2cc',
        width: 100,
        height: 30,
        borderRadius: 8,
        alignSelf: 'flex-end'
    },
    buttText: {
        color: '#000',
        alignSelf: 'center',
        marginTop: 4,
    }
})

export default JobCard;
