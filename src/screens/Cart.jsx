import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import PrimeLogo from '../assets/prime-logo.png';
import {getProductFromApi, getRating, getImgUrl} from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux'
import { storeData, getData } from '../components/AsyncStorage';

const Cart = () => {

  const cart = useSelector((state)=>state.cartdata);

    console.log("data", cart);

  return (
    <ScrollView style={styles.container}>   
      <Text style={styles.title}>Cart Data</Text>
      <Text style={styles.tagline}>
        Herer all Details of cart items.
      </Text>
      <Text>
      {cart?.length &&
        cart.map(item => (
          <View key={item.id} style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image
                style={styles.productImg}
                source={{uri: item.thumbnail}}
              />
            </View>
            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{item.title}</Text>
              <View style={styles.row}>
                <Text style={styles.rating}>{item.rating}</Text>
                {getRating(item.rating)}
                <Text style={styles.ratingCount}>{item.rating}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.price}>₹ {item.price}</Text>
                <Text style={styles.mrp}>M.R.P.</Text>
                <Text style={styles.crossout}>₹ {item.discountPercentage}</Text>
              </View>
              <Text style={styles.cashback}>
                Up to 5% cashback with Amazon Pay Credit card
              </Text>
              <Image source={PrimeLogo} style={styles.logo} />
              <Text style={styles.cashback}>
                FREE Delivery by {item.category}
              </Text>
            </View>
          </View>
        ))}
       </Text>
      <View style={styles.totalcontainer} >
      <Text> Total : </Text>
      <Text> { cart.length >0 ? cart.reduce(function (acc, obj) { return acc + obj.price; }, 0) : null  } </Text>
      </View>

       <View  style={styles.buttonstyle} >
       <Button  onPress={()=>storeData(cart) } title='CheckOut' ></Button>
       </View>

    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  tagline: {
    fontSize: 11,
    color: 'grey',
  },
  productSection: {
    borderWidth: 1,
    borderColor: '#dddddd',
    flexDirection: 'row',
    marginVertical: 15,
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#dddddd',
    justifyContent: 'center',
  },
  productDetailSection: {
    width: '60%',
    padding: 10,
  },
  productImg: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
  sponsored: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 5,
  },
  productName: {
    fontSize: 12,
    color: 'black',
    lineHeight: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  rating: {
    fontSize: 10,
    color: '#017185',
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: '#017185',
    marginLeft: 5,
  },
  price: {
    fontSize: 16,
    color: '#000000',
  },
  mrp: {
    fontSize: 10,
    color: 'grey',
    marginHorizontal: 5,
  },
  crossout: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  cashback: {
    fontSize: 9,
    marginVertical: 2,
  },
  logo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
  totalcontainer : {
      flex :1,
      flexDirection : "row",
     justifyContent : 'space-evenly',
     fontSize : 100,
     fontWeight : 'bold',
     marginBottom : 30,
  },
  buttonstyle :{
     marginBottom : 30
  }
})