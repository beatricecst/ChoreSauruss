import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Signup_Button from '../../components/Signup_Button'
import { styles } from './styles';
import Input from "../../components/Input"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Login = ({navigation}) => {

    const onSignup = () => {
        navigation.navigate('Signup');
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Input placeholder='exxxxxxx@u.nus.edu' label=' NUS Email' />
                <Input placeholder='password1234' label='Password' />
                <Signup_Button title='Log in' />
                <Pressable hitSlop={20}>
                    <Text onPress={onSignup} style={{fontSize: 16, color: '#63A87F'}}>Don't have an account? Sign up</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Login;