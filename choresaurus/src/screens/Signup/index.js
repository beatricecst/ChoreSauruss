import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Signup_Button from '../../components/Signup_Button'
import { styles } from './styles';
import Input from "../../components/Input"

const Signup = () => {
    return (
        <View style={styles.container}>
            <Input placeholder='johndoe@gmail.com' label=' NUS Email' />
            <Input placeholder='password1234' label='Password' />
            <Signup_Button title='Sign Up' />
            <Pressable hitSlop={20}>
                <Text style={{fontSize: 20, color: '#63A87F'}}>Already have an account? Log In</Text>
            </Pressable>
        </View>
        
    )
}

export default Signup;