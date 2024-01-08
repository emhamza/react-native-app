import React from "react";
import { useState } from "react";
import { View, ScrollView, KeyboardAvoidingView} from "react-native";
import Text  from "@kaloraat/react-native-text";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import axios from "axios";
import CircleImage from "../components/auth/CircleImage";


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        if(!name || !email || !password){
            alert("All fields are required");
            setLoading(false)
            return;
        }

        console.log("SIGN UP REQUEST =>", name, email, password);
        try{
            const {data} = await axios.post('https://localhost:8000/api/signup', {
             name,
             email,
             password
        });
        console.log("SIGNUP SUCCESS =>", data);
        alert("Sign up successful!")
        setLoading(false)
        //redirection goes here
        }catch(err){
            console.log(err);
            setLoading(false)
        }
    }

    return (
        <KeyboardAvoidingView 
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={{flex: 1, justifyContent: "center"}}>
                    <CircleImage />
                    <Text title center>Sign Up</Text>
                    <UserInput 
                    name="NAME" 
                    value={name} 
                    setValue={setName}
                    autoCapitalize="words"
                    autoCorrect={false}
                    />

                    <UserInput
                    name="EMAIL" 
                    value={email} 
                    setValue={setEmail}
                    autoCompleteType="email"
                    keyBoardType="email-address"
                    />

                    <UserInput
                    name="PASSWORD" 
                    value={password} 
                    setValue={setPassword}
                    autoCompleteType="password"
                    secureTextEntry={true}
                    />

                    <SubmitButton title="Sign Up" handleSubmit={handleSubmit} loading={loading} />
                    {/* <Text>{JSON.stringify({name, email, password}, null, 4)}</Text> */}

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
)
}

export default Signup;