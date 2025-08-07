import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LittleLemonFooter from '@/components/LittleLemonFooter';
import LittleLemonHeader from '@/components/LittleLemonHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeScreen from '@/components/WelcomeScreen';
import MenuItems from '@/components/MenuItems';



export default function HomeScreen() {
  return (
   <SafeAreaView style={{flex: 1}}>   
   <View style={styles.container}>
    <LittleLemonHeader />
    <WelcomeScreen />
    </View>
     
    <View style={styles.footer}>
    <LittleLemonFooter />
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#333333'
  },
  footer: {
    backgroundColor: "#333333"
  },
});
