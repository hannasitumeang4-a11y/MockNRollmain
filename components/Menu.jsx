import { StyleSheet, Text, View } from "react-native";

export default function Menu() {
  return (
    <View id="menu" style={styles.container}>
      <Text style={styles.title}>Our Menu</Text>

      <View style={styles.items}>
        <Text style={styles.item}>Risol Matcha</Text>
        <Text style={styles.item}>Risol Coklat</Text>
        <Text style={styles.item}>Risol Bolognese</Text>
        <Text style={styles.item}>Mocktail Berry</Text>
        <Text style={styles.item}>Mocktail Citrus</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
    backgroundColor: "#0A192F"
  },
  title: {
    fontSize: 32,
    color: "white",
    marginBottom: 30
  },
  items: {
    gap: 15
  },
  item: {
    color: "#9EFAFF",
    fontSize: 20
  }
});