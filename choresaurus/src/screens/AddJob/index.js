import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import ParaInput from "../../components/ParaInput";
import Signup_Button from "../../components/Signup_Button";
import { styles } from "./styles";
import Headers from "../../components/Headers";
import BlueButton from "../../components/BlueButton";

export const AddJob = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Headers title='New Job Request' />
                <Input label='Start Location' placeholder='eg. Kent Ridge Mrt' />
                <Input label='End Location' placeholder='eg. Central Library' />
                <ParaInput label='Job Description' placeholder='eg. Please help to buy a packet of Panadol from Watsons and pass it to me at Central Library.' />
                <BlueButton title='Submit' />
            </View>
        </SafeAreaView>
    )
}