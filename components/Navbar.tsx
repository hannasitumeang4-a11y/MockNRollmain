// components/Navbar.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Pastikan path ini benar sesuai folder kamu
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const router = useRouter();
  
  // Menggunakan try-catch sederhana atau pengecekan null agar tidak error saat context belum siap
  const cartContext = useCart();
  const cart = cartContext?.cart || [];

  // Hitung total item untuk indikator di logo keranjang
  const totalItems = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);

  return (
    <View style={styles.navContainer}>
      {/* Menu Kiri */}
      <View style={styles.leftLinks}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.linkText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(user)/about')}>
          <Text style={styles.linkText}>Our Story</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(user)/menu')}>
          <Text style={styles.linkText}>Shop</Text>
        </TouchableOpacity>
      </View>

      {/* Logo Tengah */}
      <View style={styles.logoWrapper}>
        <TouchableOpacity onPress={() => router.push('/')} style={styles.logoCircle}>
          <Image 
            source={require('../assets/images/logo-mocknrolls.png')} 
            style={styles.logoImage} 
            resizeMode="cover" 
          />
        </TouchableOpacity>
      </View>

      {/* Menu Kanan */}
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/(user)/profile')}>
           <Ionicons name="person-circle-outline" size={24} color="#C5A985" />
           <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        
        {/* Logo Keranjang */}
        <TouchableOpacity 
          style={styles.cartBtn} 
          onPress={() => router.push('/(user)/cart')}
        >
          <View>
            <Ionicons name="bag-outline" size={24} color="white" />
            {totalItems > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{totalItems}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#0E2F22', 
    height: 110, 
    paddingHorizontal: '5%',
    justifyContent: 'space-between', 
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#B8860B',
    zIndex: 10,
  },
  leftLinks: { flexDirection: 'row', gap: 20, flex: 1 },
  linkText: { color: 'white', fontSize: 13, fontWeight: '600', textTransform: 'uppercase' },
  logoWrapper: { flex: 1, alignItems: 'center' },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#B8860B',
  },
  logoImage: { width: '100%', height: '100%' },
  rightIcons: { flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center', gap: 15 },
  iconBtn: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  loginText: { color: 'white', fontSize: 13, fontWeight: '700' },
  cartBtn: { padding: 5 },
  badge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#A0522D',
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white'
  },
  badgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' }
});