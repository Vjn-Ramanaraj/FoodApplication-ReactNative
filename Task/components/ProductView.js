import React from 'react';
import { View, Text, StyleSheet, Image,Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const ProductView = ({ route }) => {
  const { product } = route.params;
  const navigation=useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Icon name="arrow-back" size={26} color="white" fontWeight= 'bold'>                                               <Icon name="notifications-sharp" size={24} color="white" fontWeight= 'bold' alignItems="right"/></Icon>
       
      </TouchableOpacity>
      <Text style={styles.text}>{ product.name}</Text>
      <Text/>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text/><Text/>
     <Text> <Text style={styles.textP}>{`Price: ${product.price}`}<Text style={styles.textR}>                        {`Rating: ${product.rating}`}</Text></Text></Text>
     <Text/>
     <Text style={styles.textdetail}>{`${product.details}`}</Text>
     <Text/>
     <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>ADD TO BASKET</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop:20,
    height:800,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor:"#141E46"
  },
  productImage: {
    width: 350,
    height: 380,
    resizeMode: 'cover',
    borderRadius:100,
    
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
   
    color:"white",
    textAlign:"center"
    
  },
  textP: {
    fontSize: 22,
    fontWeight: 'bold',
    color:"white",
  },
  textR: {
    fontSize: 23,
    fontWeight: 'bold',
    color:"#FF0000",
  },
  button:{
    padding: 15,
    height: 60,
    width: 165,
    borderRadius: 50,
    backgroundColor: '#FFF700', // Yellow color
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft:100
  },
  buttonText:{
fontSize:16,
color:"Black",
fontWeight: 'bold',
  },
  textdetail:{
textAlign:"center",
fontSize:20,
color:"#39e75f",
fontWeight:"bold"

  }

});

export default ProductView;
