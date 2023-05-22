import React from "react";
import { Image, Text, View, Pressable, SafeAreaView } from "react-native";
import { styles } from "./styles";
import Signup_Button from "../../components/Signup_Button";

const Welcome = ({navigation}) => {
    return (
        <SafeAreaView style={styles.outside}>
            <View style={styles.container}>
                <Image resizeMode='contain' style={styles.image} source={require('../../assets/dinosaur.png')}/>
                <Text style={styles.text}>Welcome to ChoreSaurus</Text>
                <Signup_Button onPress={() => navigation.navigate("Signup")} title='Create Account' />
                <Pressable hitSlop={20} onPress={() => navigation.navigate("Login")}>
                    <Text style={{fontSize: 20, color: '#63A87F'}}>Log In</Text>
                </Pressable>

            </View>
        </SafeAreaView>
        
    )
}
export default Welcome;