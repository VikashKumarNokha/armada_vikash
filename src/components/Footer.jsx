import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const Footer = () => {

  const navigation = useNavigation();

  return (
    <View style= { styles.container} >
      <Pressable  > 
      <Text onPress={()=>  navigation.navigate('ProductScreen') } style= {styles.text} >Products</Text>
      </Pressable> 
      <Pressable  > 
      <Text onPress={()=>  navigation.navigate('Order') } style= {styles.text} >Orders</Text>
      </Pressable> 
      <Pressable  > 
       <Text onPress={()=>  navigation.navigate('Cart') } style= {styles.text} >Cart</Text>
       </Pressable> 
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container :{
         flex :1,
         flexDirection : 'row',
         justifyContent : 'space-evenly'
    },
    text :{
        width : 50,
        height : 20,
        backgroundColor : "black",
        color : "white",
        marginBottom : 10
    
    }

})