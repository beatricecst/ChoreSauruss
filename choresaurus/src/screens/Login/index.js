import React, { useContext } from "react";
import { View, Pressable } from "react-native";
import { styles } from "./styles";
import { AuthContext } from "../../navigation/AuthProvider";
import Input from "../../components/Input";
import Signup_Button from "../../components/Signup_Button";

const Login = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {login} = useContext(AuthContext);
        return (
            <View style={styles.container}>
                <Input onChangeText={(userEmail) => setEmail(userEmail)} placeholder='johndoe@gmail.com' label='Email' />
                <Input onChangeText={(userPassword) => setPassword(userPassword)} placeholder='password1234' label='Password' />
                <Signup_Button onPress={() => login(email, password)} title='Login' />
            </View>
            
        )
}
export default Login;