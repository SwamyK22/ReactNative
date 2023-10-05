import * as React from 'react';
import { View, Text, SectionList, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OverlayBlend } from 'react-native-image-filter-kit'
import styles from './ShoppingCartStyle'


const Stack = createNativeStackNavigator()

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{
          marginBottom: 20,
          fontSize: 40
        }}>Welcome to store</Text>
        <Button
          title='Fruits Store'
          onPress={() => navigation.navigate('Fruits')}
        />
        <View style={{
          marginTop: 10
        }}>
        <Button
          title='Vegetables store'
          onPress={() => navigation.navigate('vegetables')}
        />
        </View>
       
      </View>
    );
  }

  function Fruits(){
    const data = [{
      category : 'Fruits',
      data : [
          {name: 'Apple', Quantity: 2, Price: 199, url: 'data:image/jpeg;base64,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'},
          {name: 'Banana', Quantity: 3, Price: 149, url:'data:image/jpeg;base64,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'},
          {name: 'Orange', Quantity: 1, Price: 129, url: 'data:image/jpeg;base64,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'},
      ],   
  },
  ]
  

  const renderSectionHeader = ({section}) => (
      <View style={styles.sectionHeader}>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold'
          }}>{section.category}</Text>
      </View>
  )

  const renderItem = ({item}) =>(
   <View style={styles.itemContainer}>
      <View >
          <View style={styles.itemName}>
              <Text style={{
                fontSize: 25,
                fontWeight: 'bold'
              }}>{item.name}</Text>
          </View>
          <View style={styles.itemDetails}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Quantity: {item.Quantity}</Text>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>price: {item.Price}</Text>
                  
          </View>
      </View>
      <View>
      <Image
       style={{
        height:100,
        width: 100,
       }}
       source={{
        uri: item.url,
      }}
    />
      </View>
    </View>
  )

 
return (
 <>
 <SectionList
   sections={data}
   keyExtractor={(item, index) => index.toString()}
   renderSectionHeader={renderSectionHeader}
   renderItem={renderItem}
 />
   </>
)
}

function Vegetables(){
  const data = [
    {
      category : 'Vegetables',
      data : [
          {name: 'Carrot', Quantity: 2, Price: 199, url: 'data:image/jpeg;base64,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'},
          {name: 'Brocoli', Quantity: 3, Price: 149, url: 'data:image/jpeg;base64,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'},
      ]
  }
  ]
  const renderSectionHeader = ({section}) => (
    <View style={styles.sectionHeader}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold'
        }}>{section.category}</Text>
    </View>
)

const renderItem = ({item}) =>(
  <View style={styles.itemContainer}>
  <View >
      <View style={styles.itemName}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold'
          }}>{item.name}</Text>
      </View>
      <View style={styles.itemDetails}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold'
          }}>Quantity: {item.Quantity}</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold'
          }}>price: {item.Price}</Text>
              
      </View>
  </View>
  <View>
  <Image
   style={{
    height:100,
    width: 100,
   }}
   source={{
    uri: item.url,
  }}
/>
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

const Navigation1 = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fruits" component={Fruits} />
        <Stack.Screen name="vegetables" component={Vegetables} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation1