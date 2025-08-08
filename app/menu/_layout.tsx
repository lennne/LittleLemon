import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import 'react-native-reanimated';
import  Constants  from 'expo-constants';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <>
    <View style={{flex:1}}>
      <Drawer screenOptions={{drawerStyle: {height:500, marginTop: Constants.statusBarHeight }}}>
          <Drawer.Screen name='profile' />
          <Drawer.Screen name='(tabs)' />
      </Drawer>
      
      </View>
      
      </>
  );
}
