// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();

    const navigateToSignup = () => {
        navigation.navigate('NestedStack', { screen: 'Signup' });
      };
    
  return (
    <View>
      <Text>Home Screen</Text>
      <Text onPress={navigateToSignup}>Get yourself Register</Text>
    </View>
  );
};

export default HomeScreen;
