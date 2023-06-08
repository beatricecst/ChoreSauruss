import React from "react";
import { Image, Text, View } from "react-native";
import AddButt from "../components/AddButt";
import JobListButt from "../components/JobListButt";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import { StyleSheet } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList } from "react-native";


export const Feed = () => {

    const navigation = useNavigation();

    function goAddJob() {
        navigation.navigate('AddJob');
    }

    function goJobList() {
        navigation.navigate('Browse');
    }
    

    return (
        <View>
            <View style={styles.container}>
                <Text>This is where we display ongoing task</Text>
                <Text>the two buttons below are working</Text>
            </View>
            <View style={styles.container1}>
                <AddButt title='New Job Request' onPress={goAddJob}/>
             </View>

            <View style={styles.container2}>
                <JobListButt title='Job Listing' onPress={goJobList}/>
            </View>
            
        
            


        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 400,
        backgroundColor: '#d9dddc',
        alignSelf: 'center',
        alignItems:'center',
        borderRadius: 20,
        marginTop: 20,
    },
    image: {
        width:300,
        height:300,
        alignSelf:"center",
        borderRadius:20
    },
    container1: {
        width:'80%',
        height: 70,
        backgroundColor: '#d9dddc',
        alignSelf: 'center',
        alignItems:'center',
        marginTop: 30,
        borderRadius: 20,
    },
    container2: {
        marginTop: 20,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#d9dddc',
        width: '80%',
        height: 70
    }
})



