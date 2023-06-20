import React from "react";
import { Pressable, Text, View } from "react-native";
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
import { styles } from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import EditProfile from "../EditProfile";

export const Profile = () => {
  const navigation = useNavigation();

  function handleEditPress() {
    navigation.navigate('EditProfile');
  }

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.userInfoSection,{ justifyContent: 'flex-start' }] }>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={70}
          />
          <View style={{marginLeft: 10}}>
            <Title style={[styles.title, {
              marginTop:10,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>


      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>CAPT, NUS</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>98239404</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>10</Title>
            <Caption>Ongoing Orders</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Completed Orders</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={handleEditPress}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableRipple>


      </View>
        </SafeAreaView>
  
    )
}

export default Profile; 