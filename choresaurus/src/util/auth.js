import axios from "axios";
const API_KEY = 'AIzaSyAVlk-87P8sRj5oAI0x_AGjHfNBJxkQ0hM';

// export async function authenticate(mode, email, password) {
//     const url = 'https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}';
//     const response = await axios.post(url, 
//         {
//         email:email,
//         password:password,
//         returnSecureToken:true
//         });
// }


export async function createUser(email, password) {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVlk-87P8sRj5oAI0x_AGjHfNBJxkQ0hM';
    const response = await axios.post(url, 
        {
        email:email,
        password:password,
        returnSecureToken:true
        });
}

export async function login(email, password) {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVlk-87P8sRj5oAI0x_AGjHfNBJxkQ0hM';
    const response = await axios.post(url, 
        {
        email:email,
        password:password,
        returnSecureToken:true
        });
}
