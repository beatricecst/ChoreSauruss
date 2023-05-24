import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Signup_Button from '../../components/Signup_Button'
import { styles } from './styles';
import Input from "../../components/Input"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Signup = ({navigation}) => {
    const onLogin = () => {
        navigation.navigate('Login');
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Input placeholder='exxxxxxx@u.nus.edu' label=' NUS Email' />
                <Input placeholder='password1234' label='Password' />
                <Signup_Button title='Sign Up' />
                <Pressable hitSlop={20}>
                    <Text onPress={onLogin} style={{fontSize: 16, color: '#63A87F'}}>Already have an account? Log In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
        
    )
}

export default Signup;