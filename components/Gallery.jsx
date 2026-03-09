import { StyleSheet, Text, View } from "react-native";

export default function Gallery() {
  return (
    <View id="gallery" style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <Text style={styles.text}>Photos of our delicious risol & mocktails.</Text>
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
  text: {
    color: "#9EFAFF",
    marginTop: 10
  }
});