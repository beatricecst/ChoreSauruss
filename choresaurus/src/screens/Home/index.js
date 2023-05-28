import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import AddButt from "../../components/AddButt";
import { useNavigation } from "@react-navigation/native";
import { AddJob } from "../AddJob";
import { Feed } from "../Feed";
import { Browse } from "../Browse";
import { createStackNavigator } from "@react-navigation/stack";
//this is a stack navigator, that contains add job and browse job listings screen


const Stack = createStackNavigator();

export function Home() {
    
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Feed' component={Feed} />
            <Stack.Screen name="AddJob" component={AddJob} />
            <Stack.Screen name="Browse" component={Browse} />
        </Stack.Navigator>
    );
    
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center'
    }
})