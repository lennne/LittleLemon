import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack, Tabs } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import LittleLemonFooter from '@/components/LittleLemonFooter';
import { View } from 'react-native';

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
   <Tabs
            screenOptions={({ route }) => ({
              tabBarIcon: ({size}) => {
                let iconName: "search" | "home" | "settings" = "search" ;
                if (route.name === 'Welcome') {
                  iconName = 'home';
                } else if (route.name === 'Login') {
                  iconName = 'settings';
                }
                return <Ionicons name={iconName} size={size} />;
              },
            })}
            initialRouteName="settings">
            <Tabs.Screen name="index"/>
            <Tabs.Screen name="settings"  />
          </Tabs>
  );
}
