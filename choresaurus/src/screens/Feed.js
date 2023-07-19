import React, { useContext } from "react";
import { Image, Text, View } from "react-native";
import AddButt from "../components/AddButt";
import JobListButt from "../components/JobListButt";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import { StyleSheet } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList } from "react-native";
import { AddJob } from "./AddJob";
import FormButton from "../components/FormButton";
import { AuthContext } from "../components/AuthProvider";

export const Feed = () => {

    const navigation = useNavigation();

    function goAddJob() {
        navigation.navigate('AddJob');
    }

    function goJobList() {
        navigation.navigate('Browse');
    }
    const {logout} = useContext(AuthContext);

    return (
        <View style={styles.bigContainer}>
            
            <View>
                <AddButt title='New Job Request' onPress={goAddJob}/>
             </View>

            <View>
                <JobListButt title='Job Listing' onPress={goJobList}/>
            </View>

            <View>
                <FormButton buttonTitle='Log out' onPress={() => logout()} />
            </View>

        </View>
        
        
    )
}

const styles = StyleSheet.create({
    bigContainer: {
        alignItems: "center",
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    }, 

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



