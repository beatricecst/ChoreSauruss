import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../components/AuthProvider';
import { useState, useContext } from 'react';
import 'firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const EditProfile = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [location, setLocation] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const handleFname = (f) => {
    setFname(f);
  }
  const handleLname = (l) => {
      setLname(l);
  }
  const handleLocation = (l) => {
    setLocation(l);
  }
  const handlePhone = (p) => {
      setPhone(p);
  }
  const handleEmail = (e) => {
    setEmail(e);
}
// const navigation = useNavigation();
const goBack = () => {
  navigation.navigate('Profile');
}
const Edit = async() => {
  navigation.navigate('Profile', 
      {name: fname, number: phone, location: location, email: email});
        
  firestore().collection('users')
              .add({
                  userid: user.uid,
                  Fname: fname,
                  Lname: lname,
                  Location: location,
                  Phone: phone,
                  Email: email
              })
              .then(() => {
                  Alert.alert('Profile successfully updated!')
              })
              .catch((error) => {
                  console.log(error)
              })
}

  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ImageBackground
                source={require("../../assets/greeny.png") }
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
            Edit your profile
          </Text>
        </View>
        <View style={styles.action}>
        
          <TextInput
            onChangeText={handleFname}
            placeholder="First Name"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          
          <TextInput
            onChangeText={handleLname}
            placeholder="Last Name"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
         
          <TextInput
            onChangeText={handleLocation}
            placeholder="Default Location"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          
          <TextInput
            onChangeText={handlePhone}
            placeholder="Phone"
            keyboardType="number-pad"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
         
          <TextInput
            onChangeText={handleEmail}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={Edit}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.back}>Back to profile</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default EditProfile;