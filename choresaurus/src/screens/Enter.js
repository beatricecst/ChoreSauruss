import { firebase } from '@react-native-firebase/auth';
import React from 'react';
import { Button, StyleSheet, TextInput, View, ImageBackground } from 'react-native';

export default function Enter({ onLogin, username, setUsername }) {
  // const currentUid = firebase.auth().currentUser.uid;
  // setUsername(currentUid);
  // console.log(currentUid);

  return (
    <ImageBackground
      source={require('../assets/eating.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your name"
        />
        <Button title={'Enter Chatroom'} onPress={onLogin} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    marginBottom: 30,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
