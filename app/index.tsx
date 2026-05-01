// app/index.tsx
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
// PERBAIKAN: Pastikan N pada Navbar adalah HURUF BESAR sesuai nama file di folder components
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Hero />
        <View style={styles.sectionDivider} />
        <Menu />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F1E9' },
  sectionDivider: { 
    height: 1, 
    backgroundColor: '#E0DDD5', 
    marginHorizontal: '10%',
    marginVertical: 20 
  }
});