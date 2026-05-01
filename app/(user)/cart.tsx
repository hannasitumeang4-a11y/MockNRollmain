import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from '../../components/Navbar';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, totalPrice, addToCart } = useCart();

  return (
    <View style={styles.container}>
      {/* Navbar tetap terlihat agar user bisa balik ke Home/Menu */}
      <Navbar />
      
      <View style={styles.mainContainer}>
        <Text style={styles.headerTitle}>Daftar Pesanan Kamu (Draft)</Text>

        {cart.length === 0 ? (
          <View style={styles.emptyContent}>
            <Ionicons name="basket-outline" size={80} color="#CCC" />
            <Text style={styles.emptyText}>Belum ada produk di list belanjaanmu.</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.itemRow}>
                  <View>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>Rp {item.price.toLocaleString('id-ID')}</Text>
                  </View>
                  
                  <View style={styles.actionRight}>
                    <View style={styles.qtyBox}>
                      <TouchableOpacity onPress={() => removeFromCart(item.id)}><Ionicons name="remove-circle-outline" size={24} color="#2D4628" /></TouchableOpacity>
                      <Text style={styles.qtyVal}>{item.quantity}</Text>
                      <TouchableOpacity onPress={() => addToCart(item)}><Ionicons name="add-circle-outline" size={24} color="#2D4628" /></TouchableOpacity>
                    </View>
                    <Text style={styles.subtotal}>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</Text>
                  </View>
                </View>
              )}
            />

            <View style={styles.footer}>
              <View style={styles.totalInfo}>
                <Text style={styles.totalLabel}>Total Keseluruhan:</Text>
                <Text style={styles.totalVal}>Rp {totalPrice.toLocaleString('id-ID')}</Text>
              </View>
              
              <View style={styles.btnGroup}>
                <TouchableOpacity style={styles.btnAdd} onPress={() => router.push('/(user)/menu')}>
                  <Text style={styles.btnAddText}>+ Tambah Menu Lain</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnPay} onPress={() => router.push('/(user)/checkout')}>
                  <Text style={styles.btnPayText}>Bayar Sekarang</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDFDFD' },
  mainContainer: { flex: 1, padding: 20 },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#2D4628', marginBottom: 20 },
  emptyContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#999', marginTop: 10 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', padding: 15, borderRadius: 15, marginBottom: 12, elevation: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#2D4628' },
  itemPrice: { fontSize: 12, color: '#888' },
  actionRight: { alignItems: 'flex-end' },
  qtyBox: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 5 },
  qtyVal: { fontWeight: 'bold', fontSize: 16 },
  subtotal: { fontWeight: '900', color: '#2D4628' },
  footer: { paddingVertical: 20, borderTopWidth: 1, borderTopColor: '#EEE' },
  totalInfo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  totalLabel: { fontSize: 16, color: '#666' },
  totalVal: { fontSize: 24, fontWeight: '900', color: '#2D4628' },
  btnGroup: { flexDirection: 'row', gap: 10 },
  btnAdd: { flex: 1, borderWidth: 1, borderColor: '#2D4628', borderRadius: 10, padding: 15, alignItems: 'center' },
  btnAddText: { color: '#2D4628', fontWeight: 'bold' },
  btnPay: { flex: 1, backgroundColor: '#2D4628', borderRadius: 10, padding: 15, alignItems: 'center' },
  btnPayText: { color: 'white', fontWeight: 'bold' }
});