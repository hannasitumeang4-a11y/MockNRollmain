import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from '../../components/Navbar';
import { useCart } from '../../context/CartContext';

export default function CheckoutPage() {
  const { totalPrice, clearCart } = useCart();
  const [method, setMethod] = useState('QRIS');
  const router = useRouter();

  const handleConfirm = () => {
    alert("Pesanan Berhasil! Silakan konfirmasi bukti bayar ke WhatsApp kami.");
    clearCart();
    router.push('/');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F1E9' }}>
      <Navbar />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Transaksi MOCK'N'ROLLS</Text>
        
        <View style={styles.card}>
          <Text style={styles.label}>Total Tagihan:</Text>
          <Text style={styles.totalPrice}>Rp {totalPrice.toLocaleString('id-ID')}</Text>
        </View>

        <Text style={styles.subTitle}>Metode Pembayaran</Text>
        <View style={styles.methodContainer}>
          <TouchableOpacity 
            style={[styles.methodBtn, method === 'QRIS' && styles.activeMethod]} 
            onPress={() => setMethod('QRIS')}
          >
            <Text style={method === 'QRIS' ? styles.activeText : { color: '#2D4628' }}>QRIS</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.methodBtn, method === 'CASH' && styles.activeMethod]} 
            onPress={() => setMethod('CASH')}
          >
            <Text style={method === 'CASH' ? styles.activeText : { color: '#2D4628' }}>CASH (PO)</Text>
          </TouchableOpacity>
        </View>

        {method === 'QRIS' ? (
          <View style={styles.paymentBox}>
            <Text style={styles.paymentHint}>Silakan scan kode di bawah ini:</Text>
            {/* Bagian pemanggilan gambar QRIS kamu */}
            <Image 
              source={require('../../assets/images/qris-payment.png')} 
              style={styles.qrisImage}
              resizeMode="contain"
            />
            <Text style={styles.brandName}>MOCK'N'ROLLS OFFICIAL</Text>
          </View>
        ) : (
          <View style={styles.paymentBox}>
            <Text style={styles.cashText}>
              Pembayaran dilakukan secara tunai (Cash) pada saat pengambilan pesanan sesuai jadwal Pre-Order (PO).
            </Text>
          </View>
        )}

        <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
          <Text style={styles.confirmText}>KONFIRMASI SEKARANG</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2D4628', marginBottom: 20 },
  card: { backgroundColor: 'white', padding: 25, borderRadius: 15, marginBottom: 20, elevation: 3 },
  label: { color: '#666', fontSize: 14, marginBottom: 5 },
  totalPrice: { fontSize: 32, fontWeight: '900', color: '#A0522D' },
  subTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: '#2D4628' },
  methodContainer: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  methodBtn: { flex: 1, padding: 15, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: '#2D4628' },
  activeMethod: { backgroundColor: '#2D4628' },
  activeText: { color: 'white', fontWeight: 'bold' },
  paymentBox: { backgroundColor: 'white', padding: 20, borderRadius: 15, alignItems: 'center', minHeight: 250 },
  paymentHint: { marginBottom: 15, color: '#666', fontSize: 13 },
  qrisImage: { width: 250, height: 250 }, // Ukuran gambar QRIS kamu
  brandName: { marginTop: 15, fontWeight: 'bold', color: '#2D4628' },
  cashText: { textAlign: 'center', color: '#444', lineHeight: 22 },
  confirmBtn: { backgroundColor: '#A0522D', padding: 20, borderRadius: 12, marginTop: 30, marginBottom: 50, alignItems: 'center' },
  confirmText: { color: 'white', fontWeight: 'bold', fontSize: 16, letterSpacing: 1 }
});