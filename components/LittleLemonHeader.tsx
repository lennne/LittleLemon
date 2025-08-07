import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EE9972',
    },
    text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    }
})