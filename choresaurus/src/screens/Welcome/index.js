import React from "react";
import { Image, Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import Signup_Button from "../../components/Signup_Button";

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../assets/dinosaur.png')}/>
            <Text style={styles.text}>Welcome to ChoreSaurus</Text>
            <Signup_Button title='Create Account' />
            <Pressable hitSlop={20}>
                <Text style={{fontSize: 20, color: '#63A87F'}}>Log In</Text>
            </Pressable>

        </View>
    )
}
export default Welcome;