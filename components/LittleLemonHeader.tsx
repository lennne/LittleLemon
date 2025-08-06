import { View, Text, SafeAreaView } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.1, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          fontSize: 30,
          color: 'white',
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
