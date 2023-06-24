import React, { useContext, useState } from "react";
import { Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import ParaInput from "../../components/ParaInput";
import Signup_Button from "../../components/Signup_Button";
import { styles } from "./styles";
import Headers from "../../components/Headers";
import BlueButton from "../../components/BlueButton";
import 'firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../../components/AuthProvider";


export const AddJob = () => {
    const {user, logout} = useContext(AuthContext);
    // const {isAuthenticated, logout} = useContext(AuthContext);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [desc, setDesc] = useState(null);
    
    
    const handleStart = (s) => {
        setStart(s);
    }
    const handleEnd = (e) => {
        setEnd(e);
    }
    const handleDesc = (input) => {
        setDesc(input);
    }
    const submitJob = async() => {
        
        firestore().collection('Jobs')
                    .add({
                        userid: user.uid,
                        Start: start,
                        End: end,
                        Desc: desc,
                        postTime: firestore.Timestamp.fromDate(new Date())
                    })
                    .then(() => {
                        Alert.alert('Yay! Job request submitted', 'Please wait for errand runners to accept it')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
    }
    return (
        <ScrollView>
        <SafeAreaView>
            <View style={styles.container}>
                <Headers title='New Job Request' />
                <ParaInput label='Start Location' placeholder='eg. Kent Ridge Mrt' onChangeText={handleStart}/>
                <ParaInput label='End Location' placeholder='eg. Central Library' onChangeText={handleEnd}/>
                <ParaInput label='Job Description' placeholder='eg. Please help to buy a packet of Panadol from Watsons and pass it to me at Central Library.' onChangeText={handleDesc}/>
                <BlueButton title='Submit' onPress={submitJob}/>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
    
}