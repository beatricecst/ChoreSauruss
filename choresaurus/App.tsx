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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Welcome from './src/screens/Welcome';
import {Signup} from './src/screens/Signup';
import Login from './src/screens/Login';
import { Home } from './src/screens/Home';
import { AddJob } from './src/screens/AddJob';
import AuthContextProvider, { AuthContext } from './src/store/auth-context';
import AuthContent from './src/components/AuthContent';
import AuthForm from './src/components/AuthForm';
import BlueButton from './src/components/BlueButton';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerStyle: { backgroundColor: Colors.primary500 },
      //   headerTintColor: 'white',
      //   contentStyle: { backgroundColor: Colors.primary100 },
      // }}
    >
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authcontext = useContext(AuthContext);
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerStyle: { backgroundColor: Colors.primary500 },
      //   headerTintColor: 'white',
      //   contentStyle: { backgroundColor: Colors.primary100 },
      // }}
    >
      <Stack.Screen name="Home" component={Home} options={{
        headerRight: () => (<BlueButton title='Log out' onPress={authcontext.logout} />)
      }}/>
    </Stack.Navigator>
  );
}

function Navigation() {
  const authcontext = useContext(AuthContext);
  return (
      <NavigationContainer>
        {authcontext.isAuthenticated && <AuthenticatedStack />}
        {!authcontext.isAuthenticated && <AuthStack />}
        
      </NavigationContainer>
  );
}

function App(): JSX.Element {

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     hostedDomain: '', // specifies a hosted domain restriction
  //     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //     accountName: '', // [Android] specifies an account name on the device that should be used
  //     iosClientId: '86277832249-f7t8ai99v1tamo7b19hk3f6b6ud72g0b.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //     googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  //     openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  //     profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  //   });
  // })

  return (
      <>
      <AuthContextProvider>  
        <Navigation />
        </AuthContextProvider>
      </>
    );



  
}
export default App;




