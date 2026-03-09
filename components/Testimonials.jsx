import { StyleSheet, Text, View } from "react-native";

export default function Testimonials() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testimonials</Text>

      <Text style={styles.quote}>
        "Best risol I've ever tasted!" ⭐⭐⭐⭐⭐
      </Text>

      <Text style={styles.quote}>
        "Mocktails are super refreshing!" ⭐⭐⭐⭐⭐
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
    backgroundColor: "#112240"
  },
  title: {
    fontSize: 30,
    color: "white"
  },
  quote: {
    color: "#9EFAFF",
    marginTop: 15
  }
});