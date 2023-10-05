import React from 'react';
import {SectionList, View, Text, StyleSheet} from 'react-native';

const data = [
  {
    category: 'Fruits',
    data: [
      {name: 'Apple', quantity: 2, price: 1.99},
      {name: 'Banana', quantity: 3, price: 0.99},
      {name: 'Orange', quantity: 4, price: 0.79},
    ],
  },
  {
    category: 'Vegetables',
    data: [
      {name: 'Carrot', quantity: 5, price: 0.49},
      {name: 'Broccoli', quantity: 2, price: 1.29},
    ],
  },
];

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDetails: {
    marginTop: 5,
  },
});

const ShoppingListApp = () => {
  const renderSectionHeader = ({section}) => (
    <View style={styles.sectionHeader}>
      <Text>{section.category}</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.itemDetails}>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Price: ${item.price}</Text>
      </View>
    </View>
  );

  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
    />
  );
};

export default ShoppingListApp;

// Task: Build a simple shopping list app that displays a list of products grouped by
// category using the SectionList component. The list should be scrollable using the
// FlatList component, and each item should display the product name, quantity, and price.
// You should use a mapping function to render the items in each section.