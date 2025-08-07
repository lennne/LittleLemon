import { ScrollView, StyleSheet, Text, View } from "react-native";

const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

export default function MenuItems (){
    
    return (
        <View style={{flex: 0.75}}>
            <ScrollView indicatorStyle="white" style={styles.scroll}>
                <Text style={styles.textHeader}>
                    View Menu
                </Text>
                <Text style={styles.text}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scroll: {
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: "black",
    },
    textHeader: {
        color: "white",
        fontSize: 40, 
        flexWrap: 'wrap'
    },
    text: {
        color: "#F4CE14",
        fontSize: 36
    }
});