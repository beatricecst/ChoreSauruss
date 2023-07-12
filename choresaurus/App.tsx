/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Providers from './src/components/Providers';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCLeSiwzU85nZHxilAaFJ54ikLeDmA4L7c",
  authDomain: "chores-1c4eb.firebaseapp.com",
  projectId: "chores-1c4eb",
  storageBucket: "chores-1c4eb.appspot.com",
  messagingSenderId: "448834686702",
  appId: "1:448834686702:web:a10a838d2355c60fb96dff",
  measurementId: "G-R5GVSM3C4Z",
  databaseURL: "https://chores-1c4eb-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

initializeApp(firebaseConfig);
import Providers from './src/components/Providers';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {

  return (
      <Providers />
    );



  
}
export default App;




