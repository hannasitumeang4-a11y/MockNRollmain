import { StyleSheet, Text, View } from "react-native";

export default function Hero() {
  return (
    <View id="home" style={styles.hero}>
      <Text style={styles.title}>MocknRolls</Text>
      <Text style={styles.subtitle}>
        Crispy Risol & Fresh Mocktails
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#112240"
  },
  title: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 20,
    color: "#9EFAFF",
    marginTop: 10
  }
});