import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View id="about" style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.text}>
        MocknRolls is a modern snack brand serving crispy risol
        and refreshing mocktails made with love.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
    backgroundColor: "#0A192F"
  },
  title: {
    fontSize: 30,
    color: "white"
  },
  text: {
    color: "#9EFAFF",
    marginTop: 10,
    maxWidth: 600
  }
});