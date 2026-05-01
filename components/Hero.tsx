// components/Hero.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function Hero() {
  const router = useRouter();

  return (
    <View style={styles.heroContainer}>
      {/* SISI KIRI: Gambar dengan gaya modern (Mirror layout dari referensi) */}
      <View style={styles.imageSection}>
        <View style={styles.imageCanvas}>
          <Image 
            source={require('../assets/images/hero-food.png')} 
            style={styles.heroImage} 
            resizeMode="cover"
          />
          {/* Overlay gradasi halus agar terlihat menyatu dengan background */}
          <View style={styles.imageOverlay} />
        </View>
      </View>

      {/* SISI KANAN: Teks & Navigasi */}
      <View style={styles.textSection}>
        <Text style={styles.brandTagline}>AUTHENTIC & HOMEMADE</Text>
        
        <Text style={styles.mainTitle}>
          Premium Risol{"\n"}& <Text style={styles.highlightText}>Mocktails</Text>
        </Text>
        
        <Text style={styles.subTitle}>
          Dibuat dengan cinta menggunakan bahan-bahan terbaik untuk memberikan kebahagiaan di setiap gigitan dan kesegaran di setiap tegukan.
        </Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/(user)/menu')}
          activeOpacity={0.9}
        >
          <Text style={styles.buttonText}>SHOP NOW</Text>
        </TouchableOpacity>

        {/* Aksesori Dekoratif di pojok (opsional, memberikan kesan modern) */}
        <View style={styles.decorationLine} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    flexDirection: 'row',
    backgroundColor: '#C5A985', // Warna krem/tan gelap sesuai referensi
    minHeight: 600,
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageSection: { 
    flex: 1.3, 
    height: '100%',
    justifyContent: 'center',
  },
  imageCanvas: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  heroImage: { 
    width: '100%', 
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(197, 169, 133, 0.2)', // Overlay warna senada agar foto menyatu
  },
  textSection: { 
    flex: 1, 
    paddingHorizontal: 50,
    justifyContent: 'center',
  },
  brandTagline: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0E2F22', // Hijau Tua
    letterSpacing: 3,
    marginBottom: 15,
  },
  mainTitle: { 
    fontSize: width > 1024 ? 62 : 38, 
    fontWeight: '700', 
    color: '#0E2F22', 
    lineHeight: width > 1024 ? 70 : 45,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif', // Memberikan kesan mewah
  },
  highlightText: {
    color: '#0E2F22',
    fontStyle: 'italic',
  },
  subTitle: { 
    fontSize: 16, 
    color: '#2D4628', 
    marginVertical: 25, 
    lineHeight: 26,
    opacity: 0.8,
  },
  button: { 
    backgroundColor: '#0E2F22', // Tombol Hijau Tua
    paddingVertical: 18, 
    paddingHorizontal: 45, 
    borderRadius: 2, // Kotak tajam agar terlihat lebih "High-Fashion"
    alignSelf: 'flex-start',
    // Shadow Modern
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
  },
  buttonText: { 
    color: '#C5A985', // Teks warna Tan di atas tombol gelap
    fontWeight: '800', 
    fontSize: 14,
    letterSpacing: 2,
  },
  decorationLine: {
    width: 60,
    height: 3,
    backgroundColor: '#0E2F22',
    marginTop: 40,
  }
});