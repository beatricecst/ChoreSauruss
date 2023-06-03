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
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const list = [];
                await firestore()
                .collection('Jobs')
                .get()
                .then((querySnapShot) => {
                    querySnapShot.forEach((doc) => {
                        const{Start, End, Desc, postTime} = doc.data();
                        list.push({
                            userName: 'John Doe',
                            start: Start,
                            end: End,
                            desc: Desc,
                            postTime: postTime,
                        })
                    })
                        
                    });
                setJobs(list);
                console.log('Jobs', list);
                } catch (error) {
                console.log(error);
                }
        }
        fetchPosts();
    }, []);

    return (
        <View>
            <View>
                <AddButt title='New Job Request' onPress={goAddJob}/>
             </View>

            <View>
                <JobListButt title='Job Listing' onPress={goJobList}/>
            </View>
            
        
            <FlatList
                data={jobs}
                renderItem={({ item }) => (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.text}>Start: {item.start} </Text>
                    <Text>End: {item.end}</Text>
                    </View>
                )}
                />


        </View>
        
        
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        marginRight: 30
    }
})

