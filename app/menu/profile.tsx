import Example from "@/components/Example";
import { router } from "expo-router";
import { Pressable, Text } from "react-native";

export default function profile(){
    return <>
    <Pressable onPress={() => router.navigate('/(tabs)/settings')}>
<Text>Hello world</Text>
    </Pressable>
        
    </>
}