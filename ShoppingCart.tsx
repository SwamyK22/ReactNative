import { View, Text, SectionList } from 'react-native'
import React from 'react'
import styles from './ShoppingCartStyle'

const ShoppingCart = () => {

    const data = [{
        category : 'Fruits',
        data : [
            {name: 'Apple', Quantity: 2, Price: 199},
            {name: 'Banana', Quantity: 3, Price: 149},
            {name: 'Orange', Quantity: 1, Price: 129},
        ],   
    },
    {
        category : 'Vegetables',
        data : [
            {name: 'Carrot', Quantity: 2, Price: 199},
            {name: 'Brocoli', Quantity: 3, Price: 149},
        ]
    }
    ]

    const renderSectionHeader = ({section}) => (
        <View style={styles.sectionHeader}>
            <Text>{section.category}</Text>
        </View>
    )

    const renderItem = ({item}) =>(
        <View style={styles.itemContainer}>
            <View style={styles.itemName}>
                <Text>{item.name}</Text>
            </View>
            <View style={styles.itemDetails}>
                <Text>Quantity: {item.Quantity}</Text>
                <Text>price: {item.Price}</Text>
            </View>
        </View>
    )
   
  return (
   <SectionList
     sections={data}
     keyExtractor={(item, index) => index.toString()}
     renderSectionHeader={renderSectionHeader}
     renderItem={renderItem}
   />
  )
}

export default ShoppingCart