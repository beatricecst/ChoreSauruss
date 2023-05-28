import React from "react";
import { Text, View } from "react-native";
import AddButt from "../components/AddButt";
import JobListButt from "../components/JobListButt";
import { useNavigation } from "@react-navigation/native";

export const Feed = () => {

    const navigation = useNavigation();

    function goAddJob() {
        navigation.navigate('AddJob');
    }

    function goJobList() {
        navigation.navigate('Browse');
    }

    return [
        <View>
            <AddButt title='New Job Request' onPress={goAddJob}/>
        </View>,

        <View>
            <JobListButt title='Job Listing' onPress={goJobList}/>
        </View>
    ]
}