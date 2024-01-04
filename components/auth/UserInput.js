import React from "react";
import { View, TextInput} from "react-native";
import Text  from "@kaloraat/react-native-text";

const UserInput = ({
    name, 
    value, 
    setValue, 
    keyboardType = "default",
    autoCapitalize="none",
    secureTextEntry = false
 }) => {
    return (
            <View style={{ marginHorizontal: 24}}>
                <Text semi>{name}</Text>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize={autoCapitalize}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    style={{
                    borderBottomWidth: 0.5,
                    height: 30,
                }} 
                value={value}
                onChangeText={(text) => setValue(text)}

                />
            </View>
    )
}

export default UserInput;