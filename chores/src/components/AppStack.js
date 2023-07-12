import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

import { Home } from '../screens/Home';
import { Feed } from '../screens/Feed';
import { Chats } from '../screens/Chats';
import { ProfileNavigator } from '../screens/ProfileNavigator';
import { AddJob } from '../screens/AddJob';
import { Browse } from '../screens/Browse';
import EditProfile from '../screens/EditProfile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="Feed"
      component={Feed}
    />
    <Stack.Screen
      name="AddJob"
      component={AddJob}
      options={headerShown=false}
    />
    <Stack.Screen
      name="Browse"
      component={Browse}
      options={headerShown=false}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={headerShown=false}
    />
  </Stack.Navigator>
);

const MessageStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chats}
        options={({route}) => ({
        //   title: route.params.userName,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );

const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };

  return (
    
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedStack}
        options={({route}) => ({
          tabBarLabel: 'Home',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({focused, color, size}) => {
            let iconSource = focused
                ? require('../assets/home.png')
                : require('../assets/home.png');
            return <Image source={iconSource} style={styles.tabIcon} />;
          }
            
        })}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            let iconSource = focused
                ? require('../assets/chats.png')
                : require('../assets/chats.png');
            return <Image source={iconSource} style={styles.tabIcon} />;
          }
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            let iconSource = focused
                ? require('../assets/frog.png')
                : require('../assets/frog.png');
            return <Image source={iconSource} style={styles.tabIcon} />;
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({
    tabIcon: {
        width: 20,
        height: 20
    }
})