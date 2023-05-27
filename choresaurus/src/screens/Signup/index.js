import React, { useContext, useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import Signup_Button from '../../components/Signup_Button'
import { styles } from './styles';
import Input from "../../components/Input"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AuthContent from "../../components/AuthContent";
import { createUser } from "../../util/auth";
import { authenticate } from "../../util/auth";
import { AuthContext } from "../../store/auth-context";

export function Signup () {
    
    // return (
    //     <SafeAreaView>
    //         <View style={styles.container}>
    //             <Input placeholder='johndoe@gmail.com' label=' NUS Email' />
    //             <Input placeholder='password1234' label='Password' />
    //             <Signup_Button title='Sign Up' />
    //             <Pressable hitSlop={20}>
    //                 <Text style={{fontSize: 16, color: '#63A87F'}}>Already have an account? Log In</Text>
    //             </Pressable>
    //         </View>
    //     </SafeAreaView>
        
    // )
    const[isAuthenticating, setIsAuthenticationg] = useState(false);
    const authcontext = useContext(AuthContext);

    async function signUpHandler({email, password}) {
        try {
            setIsAuthenticationg(true);
            const token = await createUser(email, password); 
            authcontext.authenticate(token);
            setIsAuthenticationg(false);
        } catch (error) {
            Alert.alert('Authentication failed', 'Please check your credentials')
        }
        
    }
    return (
        <AuthContent onAuthenticate={signUpHandler}/>
    )
}
