import React, { useContext, useState } from "react";
import { Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import ParaInput from "../../components/ParaInput";
import Signup_Button from "../../components/Signup_Button";
import { styles } from "./styles";
import Headers from "../../components/Headers";
import BlueButton from "../../components/BlueButton";
import storage from '@react-native-firebase/storage';
import firebase from 'firebase/app';
import 'firebase/storage';
import firestore from '@react-native-firebase/firestore';
import AuthContent from "../../components/AuthContent";
import { AuthContext } from "../../store/auth-context";
import { ScrollView } from "react-native-gesture-handler";


export const User = () => {

    // const {isAuthenticated, logout} = useContext(AuthContext);
    const [firstName, setFN] = useState(null);
    const [lastName, setLN] = useState(null);
    const [phone, setPN] = useState(null);
    const [em, setEM] = useState(null);
    
    const handleFN = (s) => {
        setFN(s);
    }
    const handleLN = (e) => {
        setLN(e);
    }
    const handlePN = (input) => {
        setPN(input);
    }
    const handleEM = (ems) => {
        setEM(ems);
    }

    const editme = async() => {
        
        firestore().collection('User')
                    .add({
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