import { useState } from "react";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

type ItemProps = {
    name: string;
    price: string;
}

type ItemHeader = {
    section: { title: string};
}

const Item = ( {name, price} : ItemProps) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
    </View>
)

const SectionHeader = ({ section: {title} }: ItemHeader) => (
  <Text style={menuStyles.sectionHeader}>{title}</Text>
)

export default function MenuItems (){
    const [showMenu, onChangeShowMenu] = useState(false);
    const renderItem = ({item} : {item: ItemProps}) => <Item name={item.name} price={item.price} />
    return (
        <View style={menuStyles.container}>
          {!showMenu && (<Text style={menuStyles.introductoryText}>Little Lemon is aharming neighborhood bistro that sserves simple food and classic cocktails in a lively but casual environment. View our menu to explore our cuisine with daily specials</Text>)}
          <Pressable 
          onPress={() => onChangeShowMenu(!showMenu)}
          style={menuStyles.button}
          >
            <Text style={{fontSize: 22, textAlign: "center"}}>
            View Menu
          </Text>
          </Pressable>
          
            {showMenu && (<SectionList
                sections={menuItemsToDisplay}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderItem}
                renderSectionHeader={SectionHeader}
        >
            </SectionList>)}
        </View>
    )
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
  headerStyle: {
    backgroundColor: '#F4CE14',
  },
  sectionHeader: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 26,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor:'#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom:20
  },
  introductoryText: {
    color: "#EDEFEE",
    fontSize: 22,
    textAlign: "center",
    paddingTop: 20
    
  }
});