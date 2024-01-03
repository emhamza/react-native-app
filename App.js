import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greetings from './components/Greetings';
import { WebView } from 'react-native-webview';


export default function App() {
  const names = ["IBM", "HelpJuice", "Booma EnterPrises"]

  return (
    <WebView source={{ uri: 'https://www.microverse.org/'}}/>
    // <View style={styles.container}>
    //   <Text>This is react native app build for practicing</Text>
    //   {names.map((name) => (
    //     <Greetings key={name} name={name}></Greetings>
    //   ))}
    //   <StatusBar style="auto" />
    // </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
