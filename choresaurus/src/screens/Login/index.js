import React from "react";
import { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import Signup_Button from '../../components/Signup_Button'
import { styles } from './styles';
import Input from "../../components/Input"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AuthContent from "../../components/AuthContent";

function Login() {

    // const onSignup = () => {
    //     navigation.navigate('Signup');
    // }
    // return (
    //     <SafeAreaView>
    //         <View style={styles.container}>
    //             <Input placeholder='johndoe@gmail.com' label=' NUS Email' />
    //             <Input placeholder='password1234' label='Password' />
    //             <Signup_Button title='Log in' />
    //             <Pressable hitSlop={20}>
    //                 <Text onPress={onSignup} style={{fontSize: 16, color: '#63A87F'}}>Don't have an account? Sign up</Text>
    //             </Pressable>
    //         </View>
    //     </SafeAreaView>
    // )

    const[isAuthenticating, setIsAuthenticationg] = useState(false);

    async function loginHandler({email, password}) {
        try {
            setIsAuthenticationg(true);
            await login(email, password); 
            setIsAuthenticationg(false);
        } catch (error) {
            Alert.alert('Authentication failed!', 'Incorrect email or password')
        }
        
    }
    return (
        <AuthContent isLogin onAuthenticate={loginHandler}/>
    )
}

export default Login;