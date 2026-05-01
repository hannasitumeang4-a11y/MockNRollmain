// app/(user)/about.tsx
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import About from '../../components/About'; // Komponen konten di atas
import Navbar from '../../components/Navbar'; // Pastikan N Besar

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <About />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F1E9' }
});