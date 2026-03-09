import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// 1. Import useRouter dari expo-router
import { useRouter } from "expo-router";

export default function Navbar() {
  // 2. Inisialisasi router
  const router = useRouter();

  const scrollTo = (id: string) => {
    if (Platform.OS === "web" && typeof document !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <View style={styles.navbar}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>
          MOCK<Text style={{ color: "#D4AF37" }}>N</Text>ROLLS
        </Text>
      </View>

      <View style={styles.links}>
        {["home", "menu", "gallery", "about", "contact"].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => scrollTo(item)}
            style={styles.linkWrapper}
          >
            <Text style={styles.link}>{item.toUpperCase()}</Text>
            <View style={styles.underline} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.authContainer}>
        {/* 3. Tambahkan fungsi router.push ke halaman login */}
        <TouchableOpacity
          style={styles.reservationBtn}
          onPress={() => router.push("/auth/login")}
        >
          <Text style={styles.reservationText}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 50,
    backgroundColor: "#050505",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(212, 175, 55, 0.1)",
    zIndex: 1000,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 4,
  },
  links: {
    flexDirection: "row",
    gap: 35,
    flex: 2,
    justifyContent: "center",
  },
  linkWrapper: {
    alignItems: "center",
  },
  link: {
    color: "#AAAAAA",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 2,
  },
  underline: {
    height: 1,
    width: 0,
    backgroundColor: "#D4AF37",
    marginTop: 4,
  },
  authContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  reservationBtn: {
    borderWidth: 1,
    borderColor: "#D4AF37",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  reservationText: {
    color: "#D4AF37",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
