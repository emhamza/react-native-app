import React from "react";
import { View, Image } from "react-native";

const CircleImage = ()  => (
    <View style={{
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Image
            source={require("../../assets/logo.png")}
            style={{
                height: 300,
                width: 200,
            }}
        />
    </View>
)


export default CircleImage;