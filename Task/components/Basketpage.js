import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';

const BasketPage = () => {
  const data = [
    {
      name: 'Burger',
      category: 'food',
      image: 'https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3690.jpg',
      price: '$30',
      rating: 4.0,
      details: "Chicken Double cheesy Burger"
    },
    {
      name: 'Pizza',
      category: 'food',
      image: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
      price: '$50',
      rating: 4.5,
      details: "Chicken Double cheesy Pizza"
    },
    {
      name: 'Marinda',
      category: 'drink',
      image: 'https://img2.exportersindia.com/product_images/bc-full/2023/9/3861815/mirinda-soft-drink-1496379619-3009024.jpg',
      price: '$10',
      rating: 4.0,
      details: "Discount Price for 1.5 litre"
    },
    {
      name: 'Vanilla',
      category: 'ice-cream',
      image: 'https://www.theroastedroot.net/wp-content/uploads/2023/06/dairy-free-vanilla-ice-cream-8-500x500.jpg',
      price: '$30',
      rating: 4.0,
      details: "Vanilla icecream with choclate puff"
    },
    {
      name: 'Burger',
      category: 'food',
      image: 'https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3690.jpg',
      price: '$30',
      rating: 4.0,
      details: "Chicken Double cheesy Burger"
    },
    {
      name: 'Strawberry',
      category: 'ice-cream',
      image: 'https://goodthingsbaking.com/wp-content/uploads/2022/05/strawberry-ice-cream-recipe-13-683x1024.jpg',
      price: '$30',
      rating: 4.0,
      details: "Strawberry classy biscuits Icecream"
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
      />
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141E46',
  },
  flatList: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 20,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  itemPrice: {
    fontSize: 16,
    color: 'white',
  },
  checkoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 30,
  },
});
