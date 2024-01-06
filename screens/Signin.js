import React, { useState } from "react";
import { View, KeyboardAvoidingView, ScrollView } from "react-native";
import Text  from "@kaloraat/react-native-text";
import CircleImage from "../components/auth/CircleImage";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import axios from "axios";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        setLoading(true);
        if(!email || !password){
            alert("All fields are required");
            setLoading(false);
            return;
        }
    console.log("Login request =>", email, password);

        try {
            const {data} = await axios.post('https://localhost:8000/api/signin', {
                email,
                password
            })
            console.log("LOGIN SUCCESSFUL =>", data)
            alert("YOUR ARE NOW LOGED IN!")
            setLoading(false);

        }catch(err){
            console.log(err);
            setLoading(false);
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
                    <Text title center>Sign In</Text>

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

                    <SubmitButton title="Log In" handleSubmit={handleSignIn} loading={loading}/>
                    {/* <Text>{JSON.stringify({name, email, password}, null, 4)}</Text> */}

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Signin;