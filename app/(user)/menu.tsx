import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { useCart } from '../../context/CartContext';

const MENU_DATA = [
  { id: '1', name: 'Risol Matcha', price: 4000, image: require('../../assets/images/risol-matcha.png') },
  { id: '2', name: 'Risol Coklat', price: 4000, image: require('../../assets/images/risol-coklat.png') },
  { id: '3', name: 'Risol Bolognese', price: 4000, image: require('../../assets/images/risol-bolognese.png') },
  { id: '4', name: 'Blueberry Yakult', price: 10000, image: require('../../assets/images/mocktail-blueberry.png') },
  { id: '5', name: 'Strawberry Fresh', price: 10000, image: require('../../assets/images/mocktail-strawberry.png') },
];

export default function Shop() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { cart, addToCart, removeFromCart } = useCart();

  const columns = width > 1024 ? 4 : width > 720 ? 3 : 2;
  const cardWidth = (width - (40 + (columns - 1) * 15)) / columns;

  const getItemQty = (id: string) => {
    const item = cart?.find((c) => c.id === id);
    return item ? item.quantity : 0;
  };

  const renderItem = ({ item }: any) => {
    const qty = getItemQty(item.id);

    return (
      <View style={[styles.card, { width: cardWidth }]}>
        <View style={styles.imageWrapper}>
          <Image source={item.image} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.info}>
          <Text style={styles.nameText} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.priceText}>Rp {item.price.toLocaleString('id-ID')}</Text>
          
          <View style={styles.qtyRow}>
             <TouchableOpacity style={styles.qtyBtn} onPress={() => removeFromCart(item.id)} disabled={qty === 0}>
                <Ionicons name="remove" size={16} color={qty > 0 ? "#2D4628" : "#CCC"} />
             </TouchableOpacity>
             <Text style={styles.qtyNumber}>{qty}</Text>
             <TouchableOpacity style={styles.qtyBtn} onPress={() => addToCart(item)}>
                <Ionicons name="add" size={16} color="#2D4628" />
             </TouchableOpacity>
          </View>

          <View style={styles.actionGrid}>
            {/* FUNGSI 1: HANYA MASUK KERANJANG (DRAFT) */}
            <TouchableOpacity 
              style={styles.cartIconButton} 
              onPress={() => {
                addToCart(item);
                router.push('/(user)/cart'); 
              }}
            >
              <Ionicons name="cart-outline" size={20} color="white" />
            </TouchableOpacity>

            {/* FUNGSI 2: PESAN SEKARANG (LANGSUNG BAYAR) */}
            <TouchableOpacity 
              style={styles.orderNowButton} 
              onPress={() => {
                if(qty === 0) addToCart(item);
                router.push('/(user)/checkout'); // Langsung ke metode pembayaran
              }}
            >
              <Text style={styles.orderNowText}>Pesan Sekarang</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerTitle}>Our Special Menu</Text>
        <Text style={styles.headerSub}>PILIH MENU MOCK'N'ROLLS</Text>
      </View>
      <FlatList
        key={`list-${columns}`}
        data={MENU_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={columns}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDFDFD' },
  headerSection: { paddingHorizontal: 20, marginTop: 40, marginBottom: 15 },
  headerTitle: { fontSize: 28, fontWeight: '900', color: '#2D4628' },
  headerSub: { fontSize: 12, color: '#A0522D', fontWeight: '700', letterSpacing: 1 },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  row: { justifyContent: 'flex-start', gap: 15 },
  card: { backgroundColor: 'white', marginBottom: 20, borderRadius: 20, padding: 12, borderWidth: 1, borderColor: '#F2F2F2', elevation: 2 },
  imageWrapper: { width: '100%', height: 110, backgroundColor: '#F9F9F9', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  image: { width: '85%', height: '85%' },
  info: { alignItems: 'center' },
  nameText: { fontSize: 14, fontWeight: '800', color: '#2D4628' },
  priceText: { fontSize: 13, color: '#2D4628', fontWeight: '600' },
  qtyRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, padding: 4, marginVertical: 10, gap: 10 },
  qtyBtn: { width: 24, height: 24, borderRadius: 6, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
  qtyNumber: { fontSize: 14, fontWeight: 'bold', color: '#2D4628', textAlign: 'center' },
  actionGrid: { flexDirection: 'row', gap: 6, width: '100%' },
  cartIconButton: { backgroundColor: '#2D4628', width: 45, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  orderNowButton: { flex: 1, backgroundColor: '#A0522D', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  orderNowText: { color: 'white', fontWeight: 'bold', fontSize: 13 }
});