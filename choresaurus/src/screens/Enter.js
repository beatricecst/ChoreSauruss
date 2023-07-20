import { firebase } from '@react-native-firebase/auth';
import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default function Enter({onLogin, userid, setUserid}) {
    // const currentUid = firebase.auth().currentUser.uid;
    // setUsername(currentUid);
    // console.log(currentUid);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setUserid}
        value={userid}
        placeholder='Enter your uid'
      />
      <Button title={'Enter Chatroom'} onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cacaca',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});