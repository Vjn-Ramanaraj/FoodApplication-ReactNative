import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';




const Header = ({ title }) => {
  
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  const handleSearch=()=>{

  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Icon name="arrow-back" size={18} color="white" fontWeight= 'bold'>Back</Icon>
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity onPress={handleSearch} style={styles.SearchButton}>                             
        <Icon name="search" size={20} color="white" fontWeight= 'bold'  />
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141E46',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 100,
    
  },
 
  backButton: {
    padding: 5,
  },
  SearchButton:{
paddingLeft:110,


  }
});

export default Header;
