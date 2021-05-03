import * as React from 'react';
import { Text, View, StyleSheet, Touchable } from 'react-native';
import Constants from 'expo-constants';
import { Button, TextInput} from 'react-native-paper';

export default function LoginScreen() {

function firstPressed(){
  console.log('OKKK');
}

  return (

    <View>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Welcome to startpart
      </Text>
      </View>

      <View>
      <TextInput label="email" placeholder="Email" style={styles.input}/>
      <TextInput label="password" secureTextEntry={true} placeholder="Password" style={styles.input}/>
      <Button color='white' style={styles.button} mode="outlined" onPress={firstPressed}>Login</Button>
      </View>

      <Text style={styles.condition}>Read conditions and Terms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'purple',
    padding: 8,
  },
  paragraph: {
    color: 'white',
    margin: 30,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    marginTop: 20,
    backgroundColor: 'lightgray',
    margin: 20,
  },
  button: {
    padding: 10,
    margin: 20,
    backgroundColor: 'purple',
  },
  condition: {
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    color: 'gray',
  }
});
