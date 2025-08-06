import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LittleLemonFooter from '@/components/LittleLemonFooter';
import LittleLemonHeader from '@/components/LittleLemonHeader';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HomeScreen() {
  return (
   <SafeAreaView style={{flex:1}}>
   <View style={styles.container}>
    <LittleLemonHeader />
      <Text style={styles.header}>Welcome to Little Lemon</Text>

    <Text style={styles.subHeading}>
      Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
    </Text>
    </View>
     
    <View>
    <LittleLemonFooter />
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#495E57'
  },
  header: {
          padding: 40,
          fontSize: 30,
          color: '#EDEFEE',
          textAlign: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 24,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
  },
});
