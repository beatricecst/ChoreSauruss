import React, { useState } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import { Text, View } from "react-native/types";
import Input from "../../components/Input";
import { styles } from "./styles";
import Signup_Button from "../../components/Signup_Button";

const Signup = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] =useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <View style={styles.container}>
            <Input 
                onChangeText={(userEmail) => setEmail(userEmail)} 
                label='Email' 
                placeholder='johndoe@gmail.com' 
            />
            <Input 
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholder='Password123'
                label='Password'
            />
            <Input 
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholder='Password123'
                label='Confirm Password'
            />
            <Signup_Button title='Sign up' />
        </View>
    )
}

export default Signup;