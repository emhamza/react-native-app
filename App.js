// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
// import Greetings from './components/Greetings';
// import { WebView } from 'react-native-webview';
import Signup from './screens/Register';
import Signin from './screens/Signin';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drewer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drewer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="NestedStack" component={NestedStackNavigator} />   
      </Drewer.Navigator>
    </NavigationContainer>
  );
};

const NestedStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Signin' component={Signin} />
    </Stack.Navigator>
  )
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
