import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

const features = [
  "Unique Flavor Combinations",
  "Fresh Ingredients",
  "Handmade Daily",
  "Modern Drink Creations",
  "Perfect for Hangouts",
];

export default function WhyUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why MOCK'N'ROLLS?</Text>

      <View style={styles.grid}>
        {features.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 80,
  },

  title: {
    fontSize: 32,
    color: Colors.text,
    fontWeight: "bold",
    marginBottom: 30,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },

  card: {
    backgroundColor: Colors.glass,
    padding: 20,
    borderRadius: 20,
  },

  text: {
    color: Colors.text,
  },
});