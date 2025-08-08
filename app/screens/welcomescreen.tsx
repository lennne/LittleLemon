import { useRef, useState } from "react";
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Alert, View, Image } from "react-native";

export default function WelcomeScreen(){
  const refFirstName = useRef(null);
  const [firstName, onChangeFirstName] = useState('');
  const [password, onChangePassword] = useState('');
    return(
            <View style={styles.container} >
            <Image style={styles.logo} source={require('../../assets/images/little_lemon_logo.png')} />
            <Text>
              Little Lemon, your local Mediterranean Bistro
            </Text>
          </View>
    )
}

const styles = StyleSheet.create({
  logo: {
     height: 100,
     width: 300,
     resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
