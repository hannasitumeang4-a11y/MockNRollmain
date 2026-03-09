import { StyleSheet, Text, View } from "react-native";

export default function Contact() {
  return (
    <View id="contact" style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <Text style={styles.text}>Instagram: @mocknrolls</Text>
      <Text style={styles.text}>WhatsApp: 08123456789</Text>
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
    marginTop: 10
  }
});