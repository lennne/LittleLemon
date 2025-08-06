import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LittleLemonFooter from '@/components/LittleLemonFooter';
import LittleLemonHeader from '@/components/LittleLemonHeader';



export default function HomeScreen() {
  return (
   <>
   <View style={styles.container}>
    <LittleLemonHeader />
    </View>
    <View>
    <LittleLemonFooter />
    </View>
   </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  textView: {
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
