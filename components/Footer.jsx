import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        © 2026 MocknRolls. All Rights Reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 30,
    backgroundColor: "#020C1B",
    alignItems: "center"
  },
  text: {
    color: "#9EFAFF"
  }
});