import { Image } from 'expo-image';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import LittleLemonFooter from '@/components/LittleLemonFooter';
import LittleLemonHeader from '@/components/LittleLemonHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeScreen from '@/components/WelcomeScreen';
import MenuItems from '@/components/MenuItems';




export default function HomeScreen() {
  return (
    
   <SafeAreaView style={{flex: 1, backgroundColor: "#3334ab"}}>   
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
          <View style={{flex: 1, backgroundColor: "#123232"}}>
              <LittleLemonHeader /> 
                <MenuItems />
          </View>
          <View style={{justifyContent:"flex-end"}}>
              <LittleLemonFooter />
          </View>
        </KeyboardAvoidingView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#443228'
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