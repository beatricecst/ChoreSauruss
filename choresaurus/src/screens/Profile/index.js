import React from "react";
import { Pressable, Text, View } from "react-native";
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
import { styles } from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from "@react-navigation/native";
import EditProfile from "../EditProfile";
import { firebase } from "@react-native-firebase/firestore";
import { useState, useEffect } from "react";
import { IconFill, IconOutline } from "@ant-design/icons-react-native";

export const Profile = ({navigation}) => {
  // const navigation = useNavigation();
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [location, setLocation] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const uid = firebase.auth().currentUser.uid;

firebase.firestore().collection('users').where('userid', '==', uid).onSnapshot(
  (querySnapshot) => {
    if (!querySnapshot.empty) {
      const fnames = [];
      const locations = []; 
      const phones = [];
      const emails = [];

      querySnapshot.forEach((doc) => {
        const fname = doc.data().Fname;
        const location = doc.data().Location;
        const phone = doc.data().Phone;
        const email = doc.data().Email;

        fnames.push(fname); 
        locations.push(location);
        phones.push(phone);
        emails.push(email);
      });
 
      const singleFname = fnames[0];
      const singleLocation = locations[0];
      const singlePhones = phones[0];
      const singleEmails = emails[0];

      setFname(singleFname);
      setLocation(singleLocation);
      setPhone(singlePhones);
      setEmail(singleEmails);
    } else {
      console.log('No documents matching the condition found.');
    }
  });


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
            }]}>{fname}</Title>
          </View>
        </View>
      </View>


      <View style={styles.userInfoSection}>
        <View style={styles.row}>
        <IconFill name="account-book" />
          <Text style={{color:"#777777", marginLeft: 20}}>{location}</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="phone" color="#777777" size={20}/> */}
          <Text style={{color:"#777777", marginLeft: 20}}>{phone}</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="email" color="#777777" size={20}/> */}
          <Text style={{color:"#777777", marginLeft: 20}}>{email}</Text>
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
            {/* <Icon name="account-check-outline" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Icon name="settings-outline" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={handleEditPress}>
          <View style={styles.menuItem}>
            {/* <Icon name="account-check-outline" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableRipple>


      </View>
        </SafeAreaView>
  
    )
}

export default Profile; 