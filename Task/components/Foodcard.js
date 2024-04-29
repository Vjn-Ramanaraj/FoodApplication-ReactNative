import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const products = [
  {
    name: 'Pizza',
    category: 'food',
    image: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
    price: '$50',
    rating: 4.5,
    details:"Chicken Double cheesy Burger"
  },
  {
    name: 'Choclate',
    category: 'ice-cream',
    image: 'https://www.healthifyme.com/blog/wp-content/uploads/2022/05/chocolate-icecream.jpg',
    price: '$30',
    rating: 4.0,
    details:"Choclate Iceream with extra caramel"
  },
  {
    name: 'Coke',
    category: 'drink',
    image: 'https://www.mashed.com/img/gallery/the-untold-truth-of-coke/intro-1694470452.jpg',
    price: '$10',
    rating: 4.0,
    details:"Discount Price for 1.5 litre"
  },
  {
    name: 'Strawberry',
    category: 'ice-cream',
    image: 'https://goodthingsbaking.com/wp-content/uploads/2022/05/strawberry-ice-cream-recipe-13-683x1024.jpg',
    price: '$30',
    rating: 4.0,
    details:"Strawberry classy biscuits Icecream"
  },
  {
    name: 'Burger',
    category: 'food',
    image: 'https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3690.jpg',
    price: '$30',
    rating: 4.0,
    details:"Chicken Double cheesy Burger"
  },
  {
    name: 'Pizza',
    category: 'food',
    image: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
    price: '$50',
    rating: 4.5,
    details:"Chicken Double cheesy Pizza"
  },
  {
    name: 'Marinda',
    category: 'drink',
    image: 'https://img2.exportersindia.com/product_images/bc-full/2023/9/3861815/mirinda-soft-drink-1496379619-3009024.jpg',
    price: '$10',
    rating: 4.0,
    details:"Discount Price for 1.5 litre"
  },
  {
    name: 'Vanilla',
    category: 'ice-cream',
    image: 'https://www.theroastedroot.net/wp-content/uploads/2023/06/dairy-free-vanilla-ice-cream-8-500x500.jpg',
    price: '$30',
    rating: 4.0,
    details:"Vanilla icecream with choclate puff"
  },
  {
    name: 'Burger',
    category: 'food',
    image: 'https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3690.jpg',
    price: '$30',
    rating: 4.0,
    details:"Chicken Double cheesy Burger"
  },
  {
    name: 'Strawberry',
    category: 'ice-cream',
    image: 'https://goodthingsbaking.com/wp-content/uploads/2022/05/strawberry-ice-cream-recipe-13-683x1024.jpg',
    price: '$30',
    rating: 4.0,
    details:"Strawberry classy biscuits Icecream"
  },
  {
    name: 'Vanilla',
    category: 'ice-cream',
    image: 'https://www.theroastedroot.net/wp-content/uploads/2023/06/dairy-free-vanilla-ice-cream-8-500x500.jpg',
    price: '$30',
    rating: 4.0,
    details:"Vanilla icecream with choclate puff"
  },
  {
    name: 'Choclate',
    category: 'ice-cream',
    image: 'https://www.healthifyme.com/blog/wp-content/uploads/2022/05/chocolate-icecream.jpg',
    price: '$30',
    rating: 4.0,
    details:"Choclate Iceream with extra caramel"
  },

];

const Foodcard = () => {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
  };

  const handleCardPress = (product) => {
    navigation.navigate('ProductView', { product });
  };

  const filteredProducts = activeCategory === 'all' ? products : products.filter(product => product.category === activeCategory);

  return (
    <View>
      <Text style={{ color: 'white',fontSize:20,paddingLeft:10, fontWeight: 'bold',paddingTop:30}}>Category</Text>

      <View style={styles.categoryContainer}>
        
        <TouchableOpacity
          style={[styles.categoryItem, activeCategory === 'food' && styles.activeCategory]}
          onPress={() => handleCategoryPress('food')}
        >
          <FontAwesome5 name="pizza-slice" size={30} color={activeCategory === 'food' ? '##ADD8E6' : 'white'} />
          <Text style={[styles.categoryText, activeCategory === 'food' && styles.activeCategoryText]}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, activeCategory === 'drink' && styles.activeCategory]}
          onPress={() => handleCategoryPress('drink')}
        >
          <MaterialCommunityIcons name="cup" size={30} color={activeCategory === 'drink' ? '##ADD8E6' : 'white'} />
          <Text style={[styles.categoryText, activeCategory === 'drink' && styles.activeCategoryText]}>Drinks</Text>
        </TouchableOpacity>
         
        <TouchableOpacity
          style={[styles.categoryItem, activeCategory === 'ice-cream' && styles.activeCategory]}
          onPress={() => handleCategoryPress('ice-cream')}
        >
          <FontAwesome5 name="ice-cream" size={30} color={activeCategory === 'ice-cream' ? '##ADD8E6' : 'white'} />
          <Text style={[styles.categoryText, activeCategory === 'ice-cream' && styles.activeCategoryText]}>icecream</Text>
        </TouchableOpacity>


      </View>
      <Text style={styles.headertext}>Products</Text>
      <ScrollView horizontal={true}>
        {filteredProducts.map((product, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleCardPress(product)}
          >
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.text}>{product.name}</Text>
            <Text style={styles.text}>{`Price: ${product.price}`}</Text>
            <Text style={styles.text}>{`Rating: ${product.rating}`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headertext: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop:10,
    paddingHorizontal: 15,
    color: 'white',
    fontFamily: 'Raleway_200ExtraLight',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:10,
    marginBottom: 10,
    paddingHorizontal: 20,
    
   
  },
  categoryItem: {
    alignItems: 'center',
  },
  activeCategory: {
    // backgroundColor: '#ADD8E6',
    borderRadius: 8,
    padding: 5,
  },
  activeCategoryText: {
    color: '#F7F6BB',
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 14,
    color: '#141E46',
  },
  card: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 200,
    borderRadius: 50,
    margin: 8,
    backgroundColor: '#141E46',
    elevation: 4,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius:40
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F7F6BB',
  },
});

export default Foodcard;
