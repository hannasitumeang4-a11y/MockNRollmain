// components/About.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang MOCK'N'ROLLS</Text>
      <View style={styles.card}>
        <Text style={styles.description}>
          MOCK'N'ROLLS menyajikan perpaduan unik antara Risol premium yang renyah 
          dan Mocktail segar yang dibuat dengan bahan berkualitas tinggi. 
          Kami percaya bahwa camilan lezat harus bisa dinikmati kapan saja melalui kemudahan digital.
        </Text>
      </View>
      
      {/* Kamu bisa menambahkan gambar risol di sini nanti */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statLabel}>Bahan Segar</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>Pre-Order</Text>
          <Text style={styles.statLabel}>Sistem Penjualan</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2D4628', marginBottom: 20 },
  card: { 
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 15, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3
  },
  description: { fontSize: 16, color: '#555', textAlign: 'center', lineHeight: 24 },
  statsContainer: { flexDirection: 'row', marginTop: 30, gap: 20 },
  statBox: { alignItems: 'center', backgroundColor: '#2D4628', padding: 15, borderRadius: 12, width: 120 },
  statNumber: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  statLabel: { color: '#eee', fontSize: 12 }
});