// components/Menu.jsx
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const items = [
  { id: 1, name: 'Risol Coklat', price: 'Rp. 10.000' },
  { id: 2, name: 'Risol Matcha', price: 'Rp. 12.000' },
  { id: 3, name: 'Risol Bolognese', price: 'Rp. 10.000' },
];

export default function Menu() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Popular Item</Text>
      <View style={styles.grid}>
        {items.map(item => (
          <View key={item.id} style={styles.card}>
            {/* Pakai placeholder dulu */}
            <Image 
              source={{ uri: 'https://via.placeholder.com/150' }} 
              style={styles.cardImg} 
            />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { paddingVertical: 50, backgroundColor: '#F4F1E9', alignItems: 'center' },
  sectionTitle: { fontSize: 28, fontWeight: 'bold', color: '#2D4628', marginBottom: 30 },
  grid: { flexDirection: 'row', gap: 20 },
  card: { backgroundColor: 'white', padding: 15, borderRadius: 10, alignItems: 'center', width: 220 },
  cardImg: { width: 180, height: 120, borderRadius: 8, marginBottom: 10 },
  itemName: { fontWeight: 'bold', fontSize: 18, color: '#2D4628' },
  itemPrice: { color: '#666', marginTop: 5 }
});