import React from "react";
import { Text, View } from "react-native";
import AddButt from "../components/AddButt";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import { StyleSheet } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList } from "react-native";
import JobCard from "../components/JobCard";
import { getDatabase } from "firebase/database";
import { ref } from "firebase/storage";
import { firebase } from "@react-native-firebase/auth";

export const Browse = () => {

    const navigation = useNavigation();
    
    const [jobs, setJobs] = useState(null);

//     firebase.firestore().collection('users').where('userid', '==', uid).get()
//   .then((querySnapshot) => {
//     if (!querySnapshot.empty) {
//       const fnames = []; // In case there are multiple matching documents, store them in an array

//       querySnapshot.forEach((doc) => {
//         const fname = doc.data().Fname;
//         fnames.push(fname); // Store the 'Fname' value in the array
//       });

//       // If there's only one document, you can directly access the 'Fname' value
//       const singleFname = fnames[0];

//       console.log('Fnames:', fnames);
//       console.log('Single Fname:', singleFname);
//     } else {
//       console.log('No documents matching the condition found.');
//     }
//   })
//   .catch((error) => {
//     console.log('Error getting documents:', error);
//   });


    // useEffect(() => {
    //     const fetchPosts = async() => {
    //         try {
    //             const list = [];
    //             await firestore()
    //             .collection('Jobs')
    //             .get()
    //             .then((querySnapShot) => {
    //                 querySnapShot.forEach(async(doc) => {
    //                     const { Start, End, Desc, postTime } = doc.data();
    //                     const userDoc = await firebase.firestore().collection('users').where('userid', '==', doc.data().userid).get();
                        
    //                     // const userDoc = await firestore.collection('users').doc("userid").get();
    //                     const username = userDoc.exists ? userDoc.data().Fname : '';
    //                     list.push({
    //                         userName: username,
    //                         start: Start,
    //                         end: End,
    //                         desc: Desc,
    //                         postTime: postTime,
    //                     })
    //                 })
                        
    //                 });
                
    //             list.sort((a, b) => new Date(b.postTime) - new Date(a.postTime));
    //             setJobs(list);
    //             console.log('list', list);
                
    //             } catch (error) {
    //             console.log(error);
    //             }
    //     }
    //     fetchPosts();
    // }, []);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            
            const querySnapShot = await firestore().collection('Jobs').get();
            const promises = querySnapShot.docs.map(async (doc) => {
              const { Start, End, Desc, postTime } = doc.data();
              const userDoc = await firestore()
                .collection('users')
                .where('userid', '==', doc.data().userid)
                .get();
      
              const username = userDoc.docs[0].exists ? userDoc.docs[0].data().Fname : '';
              return {
                userName: username,
                start: Start,
                end: End,
                desc: Desc,
                postTime: postTime,
              };
            });
      
            const list = await Promise.all(promises);
            console.log('list:', list);
            setJobs(list); 
      
            // Now you can use the 'list' array containing the data as needed
          } catch (error) {
            console.log('Error fetching posts:', error);
          }
        };
      
        fetchPosts();
      }, []);
      

    // const findUser = async name => {
    //     const database = getDatabase();
    
    //     const mySnapshot = await get(ref(database, `users/${name}`));
    
    //     return mySnapshot.val();
    //   };
    
    
    // const onAddFriend = async name => {
    //     try {
    //       //find user and add it to my friends and also add me to his friends
    //       const database = getDatabase();
    
    //       const user = await findUser(name);
    
    //         // create a chatroom and store the chatroom id
    
    //         const newChatroomRef = push(ref(database, 'chatrooms'), {
    //           firstUser: myData.username,
    //           secondUser: user.username,
    //           messages: [],
    //         });
    
    //         const newChatroomId = newChatroomRef.key;
    
    //         const userFriends = user.friends || [];
    //         //join myself to this user friend list
    //         update(ref(database, `users/${user.username}`), {
    //           friends: [
    //             ...userFriends,
    //             {
    //               username: myData.username,
    //               avatar: myData.avatar,
    //               chatroomId: newChatroomId,
    //             },
    //           ],
    //         });
    
    //         const myFriends = myData.friends || [];
    //         //add this user to my friend list
    //         update(ref(database, `users/${myData.username}`), {
    //           friends: [
    //             ...myFriends,
    //             {
    //               username: user.username,
    //               avatar: user.avatar,
    //               chatroomId: newChatroomId,
    //             },
    //           ],
    //         });
    //       }
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    
    return (
        <FlatList
                data={jobs}
                renderItem={({ item }) => (
                    // <View style={{flexDirection: 'column', alignItems: 'center', padding:20}}>
                    // <Text>Start: {item.start} </Text>
                    // <Text>End: {item.end}</Text>
                    // <Text>Job Description: {item.desc}</Text>
                    // </View>
                    <JobCard 
                        item={item}
                        
                        />
                )}
                />
    )
}
