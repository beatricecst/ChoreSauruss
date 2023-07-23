import React from "react";
import { Pressable, Text, View, Image } from "react-native";
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
import { styles } from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from "@react-navigation/native";
import EditProfile from "../EditProfile";
import { firebase } from "@react-native-firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import { AuthContext } from "../../components/AuthProvider";
import IconAntDesign from 'react-native-vector-icons/AntDesign'; // Import the star icon from AntDesign


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
 
      if (querySnapshot.docs.length > 0) {
        const lastIndex = querySnapshot.docs.length - 1;
        const singleFname = fnames[lastIndex];
        const singleLocation = locations[lastIndex];
        const singlePhones = phones[lastIndex];
        const singleEmails = emails[lastIndex];
        setFname(singleFname);
        setLocation(singleLocation);
        setPhone(singlePhones);
        setEmail(singleEmails);
      }
      
      
    } else {
      console.log('No documents matching the condition found.');
    }
  });


  function handleEditPress() {
    navigation.navigate('EditProfile');
  }


  const {logout} = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.container}>
<View style={[styles.userInfoSection, { justifyContent: 'flex-start' }]}>
  <View style={{ flexDirection: 'row', marginTop: 20 }}>
    <Avatar.Image
      source={require("../../assets/greek.gif")}
      size={70}
    />
    <View style={{ marginLeft: 10 }}>
      <Title style={[styles.title, { marginTop: 10, marginBottom: 5, fontSize: 24 }]}>
        {fname}
      </Title>
      <Caption style={{ fontSize: 18 }}>{lname}</Caption>
      <Caption>
        User ID: {uid}
      </Caption>
    </View>
  </View>
</View>

<View style={styles.userInfoSection}>
  <View style={styles.row}>
    <IconFill name="account-book" />
    <Text style={{ color: "#777777", marginLeft: 20, fontSize: 15 }}>{location}</Text>
  </View>
  <View style={styles.row}>
    <Text style={{ color: "#777777", marginLeft: 20, fontSize: 15 }}>{phone}</Text>
  </View>
  <View style={styles.row}>
    <Text style={{ color: "#777777", marginLeft: 20, fontSize: 15 }}>{email}</Text>
  </View>
</View>
<View style={styles.ratingSection}>
        <View style={styles.ratingHeaderContainer}>
          <Text style={styles.ratingHeaderText}>Rating:</Text>
          {/* Replace 'rating_star.png' with your actual image source */}
          <Image source={require("../../assets/stars.png")} style={styles.ratingImage} />
        </View>
      </View>

      <View>
        <Image source={require("../../assets/orders.jpg")} style={styles.division}/>
       
      
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={handleEditPress}>
          <View style={styles.menuItem}>
            <Image source={require("../../assets/edit.png")} style={styles.menuItemImage} />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => logout()}>
          <View style={styles.menuItem}>
            <Image source={require("../../assets/logout.png")} style={styles.menuItemImage} />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  
    )
}

export default Profile; 