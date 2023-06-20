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

import Welcome from './src/screens/Welcome';
import {Signup} from './src/screens/Signup';
import Login from './src/screens/Login';
import { Home } from './src/screens/Home';
import { Chats } from './src/screens/Chats';
import { AddJob } from './src/screens/AddJob';
import AuthContextProvider, { AuthContext } from './src/store/auth-context';
import AuthContent from './src/components/AuthContent';
import AuthForm from './src/components/AuthForm';
import BlueButton from './src/components/BlueButton';
import { ProfileNavigator } from './src/screens/ProfileNavigator';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

// function AuthenticatedStack() {
//   const authcontext = useContext(AuthContext);
//   return (
//     <Stack.Navigator
//       // screenOptions={{
//       //   headerStyle: { backgroundColor: Colors.primary500 },
//       //   headerTintColor: 'white',
//       //   contentStyle: { backgroundColor: Colors.primary100 },
//       // }}
//     >
//       <Stack.Screen name="Home" component={Home} options={{
//         headerRight: () => (<BlueButton title='Log out' onPress={authcontext.logout} />)
//       }}/>
//     </Stack.Navigator>
//   );
// }

function AuthenticatedStack() {
  const authcontext = useContext(AuthContext);
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/home.png')
              : require('./src/assets/home.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('./src/assets/frog.png')
              : require('./src/assets/frog.png');
          } else if (route.name === 'Chats') {
            icon = focused
              ? require('./src/assets/chats.png')
              : require('./src/assets/chats.png');
          }

          // You can return any component that you like here!
          return <Image style={{ width: 24, height: 24 }} source={icon} />
        },
        headerShown: true,
        tabBarShowLabel: true,
        headerRight: () => <BlueButton title='Log out' onPress={authcontext.logout} />
      })} 
      
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
      <Tab.Screen name="Chats" component={Chats} />
    </Tab.Navigator>
  )
}

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function Navigation() {
  const authcontext = useContext(AuthContext);
  return (
      <NavigationContainer theme={MyTheme}>
        {authcontext.isAuthenticated && <AuthenticatedStack />}
        {!authcontext.isAuthenticated && <AuthStack />}
        
      </NavigationContainer>
  );
}

function App(): JSX.Element {

  return (
      <>
      <AuthContextProvider>  
        <Navigation />
        </AuthContextProvider>
      </>
    );



  
}
export default App;




