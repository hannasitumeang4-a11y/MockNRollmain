import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export default function Order() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ready to Taste the Magic?</Text>

      <View style={styles.buttons}>
        <Pressable style={styles.button}>
          <Text>WhatsApp</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text>Instagram</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text>Order Online</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 80,
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    color: Colors.text,
    fontWeight: "bold",
  },

  buttons: {
    flexDirection: "row",
    gap: 20,
    marginTop: 30,
  },

  button: {
    backgroundColor: Colors.breeze,
    padding: 15,
    borderRadius: 20,
  },
});