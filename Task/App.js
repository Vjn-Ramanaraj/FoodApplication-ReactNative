/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { SafeAreaView, ScrollView, StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'
import Elevatedcard from './components/Foodcard'
import FancyCard from './components/FancyCard'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Setting from './components/Settings';
import ProductView from './components/ProductView';
import BasketPage from './components/Basketpage';


const HomeScreen = () => (
  <SafeAreaView backgroundColor="#141E46">
      <ScrollView>
  <Elevatedcard />
  <FancyCard />
  
      </ScrollView>
      
    </SafeAreaView>
);

const Stack = createStackNavigator();
  const Tab=createBottomTabNavigator();

  const HomeIcon = ({ color, size }) => (
    <Ionicons name="home" size={size} color={color} />
  );

  const Basket=({color,size})=>(
    <Ionicons name="cart" size={size} color={color}/>
  )

  const Settings=({color,size})=>(
    <Ionicons name="settings" size={size} color={color} />
  )


const MainTabs = () => {
  return ( 
    
    // <StatusBar barStyle="light-content" backgroundColor="#141E46" />
      <Tab.Navigator  initialRouteName="HomeScreen"
        screenOptions={{ headerShown: true }}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          activeBackgroundColor: '#141E46', // Set active tab background color
          inactiveBackgroundColor: '#141E46', // Set inactive tab background color
        }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color="white" size={size} />
          ),
          header: () => <Header title="Home" />, // Add the header option
        }}
      />
         <Tab.Screen
          name="Basket"
          component={BasketPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Basket color="white" size={size}/>
            ),
           header: () => <Header title="Basket" />,
          }}
        />
          <Tab.Screen
          name="Settings"
          component={Setting}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Settings color="white" size={size}/>
            ),
 header: () => <Header title="Settings" />,
          }}
        />
      
      </Tab.Navigator>
      
   
  )
}


const App = () => {
  return (
    <NavigationContainer initialRouteName="MainTabs">
      <StatusBar barStyle="light-content" backgroundColor="#141E46" />
      <Stack.Navigator initialRouteName="MainTabs" headerMode="none">
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="ProductView" component={ProductView}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141E46',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
  })
