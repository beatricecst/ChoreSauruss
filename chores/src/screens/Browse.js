import React from "react";
import { Text, View } from "react-native";
import AddButt from "../components/AddButt";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import { StyleSheet } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList } from "react-native";
import JobCard from "../components/JobCard";

export const Browse = () => {

    const navigation = useNavigation();

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
                        const userDoc = firestore.collection('users').doc(userId).get();
                        const username = userDoc.exists ? userDoc.data().username : '';
                        list.push({
                            userName: username,
                            start: Start,
                            end: End,
                            desc: Desc,
                            postTime: postTime,
                        })
                    })
                        
                    });
                
                list.sort((a, b) => new Date(b.postTime) - new Date(a.postTime));
                setJobs(list);
                
                } catch (error) {
                console.log(error);
                }
        }
        fetchPosts();
    }, []);



    return (
        <FlatList
                data={jobs}
                renderItem={({ item }) => (
                    // <View style={{flexDirection: 'column', alignItems: 'center', padding:20}}>
                    // <Text>Start: {item.start} </Text>
                    // <Text>End: {item.end}</Text>
                    // <Text>Job Description: {item.desc}</Text>
                    // </View>
                    <JobCard 
                        item={item}
                        />
                )}
                />
    )
}
