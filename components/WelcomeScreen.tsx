import { useRef, useState } from "react";
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Alert } from "react-native";

export default function WelcomeScreen(){
  const refFirstName = useRef(null);
  const [firstName, onChangeFirstName] = useState('');
  const [password, onChangePassword] = useState('');
    return(
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}} keyboardDismissMode="on-drag">
              <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>
              Login to continue
            </Text>
            
             <TextInput
             style={styles.inputBox}
             placeholder={'email'}
             value={firstName}
             onChangeText={onChangeFirstName}
             keyboardType="email-address"
             onBlur={()=>{Alert.alert("First name is now blurred")}}
             />

             <TextInput
             style={styles.inputBox}
             placeholder={'password'}
             value={password}
             onChangeText={onChangePassword}
             keyboardType="default"
             secureTextEntry={true}
             />
          </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});