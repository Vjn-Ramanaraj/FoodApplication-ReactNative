import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>FLASH OFFERS!!!</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-combo-meal-poster-design-template-ea2288367b9788dcf61eeca27e3b3b35_screen.jpg',
            }}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>COMBO PACK MEAL</Text>
          <Text style={styles.cardLabel}>Price: $15</Text>
          <Text style={styles.cardDescription}>Don't Miss the opportunity to get a delicious meal</Text>
          <Text style={styles.cardFooter}>Valid Till 01:00:00</Text>
          <TouchableOpacity style={styles.buttonBuy}>
            <Text style={styles.buttonText}>BUY NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141E46',
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
  },
  card: {
    width: '100%',
    borderRadius: 35,
    backgroundColor: '#FFD23F',
    overflow: 'hidden',
  },
  cardElevated: {
    backgroundColor: '#FFB5DA',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  imageContainer: {
    height: 180,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 1,
    width: '100%',
  },
  cardBody: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000000',
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
    color: '#000000',
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    color: '#242B2E',
  },
  cardFooter: {
    color: '#000000',
  },
  buttonBuy: {
    backgroundColor: '#FF3EA5',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginTop: 8,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
