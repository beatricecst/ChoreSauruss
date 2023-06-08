import React from "react";
import { Text, View } from "react-native";
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
            <View>
                <AddButt title='New Job Request' onPress={goAddJob}/>
             </View>

            <View>
                <JobListButt title='Job Listing' onPress={goJobList}/>
            </View>
            
        
            


        </View>
        
        
    )
}



