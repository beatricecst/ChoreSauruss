import React from "react";
import { StyleSheet } from "react-native";
import EditProfile from "./EditProfile";
import { Profile } from "./Profile";
import { createStackNavigator } from "@react-navigation/stack";
//this is a stack navigator, that contains add job and browse job listings screen


const Stack = createStackNavigator();
export function ProfileNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name= 'Profile' component= {Profile}/>
            <Stack.Screen name='EditProfile' component={EditProfile} />
            
        </Stack.Navigator>
    );
    
}
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center'
    }
})