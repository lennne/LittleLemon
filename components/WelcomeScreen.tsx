import { useRef, useState } from "react";
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";

export default function WelcomeScreen(){
  const refFirstName = useRef(null);
  const [firstName, onChangeFirstName] = useState('')
  
    return(
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}} keyboardDismissMode="on-drag">
              <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>
              Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>

             <TextInput
             style={styles.inputBox}
             placeholder={'First Name'}
             value={firstName}
             onChangeText={onChangeFirstName}
             keyboardType="default"
             />
          </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#443221'
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
    paddingBottom: 10,
    fontSize: 16,
    backgroundColor: '#EDEFEE',
  },
});