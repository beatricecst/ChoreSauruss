
import React, {useState} from 'react';
import Messages from '../Messages';
import Enter from '../Enter';
import Users from '../Users';
import {
  getDatabase,
  get,
  ref,
  set,
  onValue,
  push,
  update,
} from 'firebase/database';

import { firebase } from '@react-native-firebase/auth';

export default function Chats() {
  const [currentPage, setCurrentPage] = useState('login');
  const [userid, setUserid] = useState(null);
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [myData, setMyData] = useState(null);

  const onLogin = async () => {
    try {
      const database = getDatabase();
      //first check if the user registered before
      const id = firebase.auth().currentUser.uid;
      const user = await findUser(firebase.auth().currentUser.uid);
      setUserid(id);
      console.log('uid: ', id);

      //create a new user if not registered
      if (user) {
        setMyData(user);
      } else {
        const newUserObj = {
          userid: userid,
          avatar: 'https://i.pravatar.cc/150?u=' + Date.now(),
        };

        set(ref(database, `users/${userid}`), newUserObj);
        setMyData(newUserObj);
      }

      // set friends list change listener
      const myUserRef = ref(database, `users/${userid}`);
      onValue(myUserRef, snapshot => {
        const data = snapshot.val();
        setUsers(data.friends);
        setMyData(prevData => ({
          ...prevData,
          friends: data.friends,
        }));
      });
      setCurrentPage('users');
    } catch (error) {
      console.error(error);
    }
  };

  const findUser = async id => {
    const database = getDatabase();

    const mySnapshot = await get(ref(database, `users/${id}`));

    return mySnapshot.val();
  };

  const onClickUser = user => {
    setCurrentPage('chat');
    setSelectedUser(user);
  };

  const onAddFriend = async id => {
    try {
      //find user and add it to my friends and also add me to his friends
      const database = getDatabase();

      const user = await findUser(id);

      if (user) {
        if (user.userid === myData.userid) {
           // don't let user add himself
           return;
         }

         if (
           myData.friends &&
           myData.friends.findIndex(f => f.userid === user.userid) > 0
         ) {
           // don't let user add a user twice
           return;
         }

         

        const newChatroomRef = push(ref(database, 'chatrooms'), {
          firstUser: myData.userid,
          secondUser: user.userid,
          messages: [],
        });

        const newChatroomId = newChatroomRef.key;

        const userFriends = user.friends || [];
        //join myself to this user friend list
        update(ref(database, `users/${user.userid}`), {
          friends: [
            ...userFriends,
            {
              username: myData.userid,
              avatar: myData.avatar,
              chatroomId: newChatroomId,
            },
          ],
        });

        const myFriends = myData.friends || [];
        //add this user to my friend list
        update(ref(database, `users/${myData.userid}`), {
          friends: [
            ...myFriends,
            {
              userid: user.userid,
              avatar: user.avatar,
              chatroomId: newChatroomId,
            },
          ],
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onBack = () => {
    setCurrentPage('users');
  };

  switch (currentPage) {
    case 'login':
      return (
        <Enter
          onLogin={onLogin}
        />
      );
    case 'users':
      return (
        <Users
          users={users}
          onClickUser={onClickUser}
          userToAdd={userToAdd}
          setUserToAdd={setUserToAdd}
          onAddFriend={onAddFriend}
        />
      );
    case 'chat':
      return (
        <Messages myData={myData} selectedUser={selectedUser} onBack={onBack} />
      );
    default:
      return null;
  }
}