import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const Signup_Button = ({title, onPress}) => {

    // const handleGoogleLogin = async() => {
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         console.log('userInfo:', userInfo);
    //       } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //           // user cancelled the login flow
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //           // operation (e.g. sign in) is in progress already
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //           // play services not available or outdated
    //         } else {
    //           // some other error happened
    //         }
    //       }
    // }
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={onPress} style={styles.butt}>
            <Text style={styles.buttText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default React.memo(Signup_Button);