import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Data Dummy Awal
const INITIAL_MENU = [
  { id: "1", name: "Crispy Risol Veggie", price: "15.000" },
  { id: "2", name: "Fresh Mocktail Lime", price: "20.000" },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [menuList, setMenuList] = useState(INITIAL_MENU);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State untuk Form CRUD
  const [currentId, setCurrentId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSave = () => {
    if (currentId) {
      // UPDATE: Mencocokkan ID untuk mengubah data
      setMenuList(
        menuList.map((item) =>
          item.id === currentId ? { ...item, name, price } : item,
        ),
      );
    } else {
      // CREATE: Membuat ID unik baru
      const newItem = { id: Date.now().toString(), name, price };
      setMenuList([...menuList, newItem]);
    }
    closeModal();
  };

  // Menambahkan tipe : string agar tidak error "implicitly has any type"
  const handleDelete = (id: string) => {
    setMenuList(menuList.filter((item) => item.id !== id));
  };

  // Memberikan default null dan tipe any pada item
  const openModal = (item: any = null) => {
    if (item) {
      setCurrentId(item.id);
      setName(item.name);
      setPrice(item.price);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentId("");
    setName("");
    setPrice("");
  };

  return (
    <View style={styles.container}>
      {/* Header Panel Admin */}
      <View style={styles.header}>
        <Text style={styles.title}>
          ADMIN <Text style={{ color: "#D4AF37" }}>PANEL</Text>
        </Text>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.replace("/auth/login")}
        >
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>MENU MANAGEMENT</Text>
            <TouchableOpacity style={styles.addBtn} onPress={() => openModal()}>
              <Text style={styles.addBtnText}>+ ADD NEW</Text>
            </TouchableOpacity>
          </View>

          {/* Table Header */}
          <View style={styles.tableRowHeader}>
            <Text style={[styles.column, { flex: 2 }]}>NAME</Text>
            <Text style={[styles.column, { flex: 1 }]}>PRICE</Text>
            <Text style={[styles.column, { flex: 1, textAlign: "center" }]}>
              ACTION
            </Text>
          </View>

          {/* List Data Menu */}
          <FlatList
            data={menuList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <Text style={[styles.itemText, { flex: 2 }]}>{item.name}</Text>
                <Text style={[styles.itemText, { flex: 1 }]}>
                  Rp {item.price}
                </Text>
                <View style={styles.actionGroup}>
                  <TouchableOpacity onPress={() => openModal(item)}>
                    <Text style={styles.editBtn}>EDIT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDelete(item.id)}>
                    <Text style={styles.deleteBtn}>DEL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>

      {/* MODAL FORM CRUD */}
      <Modal visible={isModalOpen} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {currentId ? "EDIT MENU" : "ADD MENU"}
            </Text>
            <TextInput
              placeholder="Item Name"
              placeholderTextColor="#666"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              placeholder="Price (e.g 15.000)"
              placeholderTextColor="#666"
              style={styles.input}
              value={price}
              onChangeText={setPrice}
            />
            {/* Bagian modalActions yang tadinya menyebabkan error */}
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                <Text style={styles.saveBtnText}>SAVE CHANGES</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.cancelText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#050505", padding: 30 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  title: { color: "#fff", fontSize: 24, fontWeight: "900", letterSpacing: 3 },
  logoutBtn: { borderBottomWidth: 1, borderBottomColor: "#D4AF37" },
  logoutText: { color: "#D4AF37", fontSize: 12, fontWeight: "bold" },
  content: { flex: 1, alignItems: "center" },
  card: {
    width: "100%",
    maxWidth: 800,
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 15,
    padding: 25,
    borderWidth: 1,
    borderColor: "rgba(212,175,55,0.1)",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  addBtn: {
    backgroundColor: "#D4AF37",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  addBtnText: { color: "#000", fontWeight: "bold", fontSize: 11 },
  tableRowHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 10,
  },
  column: { color: "#D4AF37", fontSize: 11, fontWeight: "bold" },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#222",
  },
  itemText: { color: "#ccc", fontSize: 13 },
  actionGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  editBtn: { color: "#3498db", fontSize: 11, fontWeight: "bold" },
  deleteBtn: { color: "#e74c3c", fontSize: 11, fontWeight: "bold" },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 350,
    backgroundColor: "#111",
    padding: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#D4AF37",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  // Properti modalActions yang kita tambahkan
  modalActions: {
    marginTop: 10,
    width: "100%",
  },
  saveBtn: {
    backgroundColor: "#D4AF37",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  saveBtnText: { color: "#000", fontWeight: "bold" },
  cancelText: { color: "#666", textAlign: "center", fontSize: 12 },
});
