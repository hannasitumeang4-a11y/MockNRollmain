import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Dimensions,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showModal, setShowModal] = useState(false); // State untuk kontrol Pop-up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleAuth = () => {
    if (!isSignUp) {
      // LOGIKA LOGIN ADMIN
      if (email === "admin@mocknrolls.com" && password === "admin123") {
        router.replace("/dashboard");
      } else if (email === "admin@mocknrolls.com" && password !== "admin123") {
        alert("Password Admin Salah!");
      } else {
        router.replace("/"); // User biasa
      }
    } else {
      setShowModal(true);
    }
  };

  const closeAndSignIn = () => {
    setShowModal(false);
    setIsSignUp(false); // Otomatis pindah ke mode Sign In
  };

  return (
    <View style={styles.container}>
      {/* --- POP UP MODAL ESTETIK --- */}
      <Modal visible={showModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.iconCircle}>
              <Text style={{ color: "#D4AF37", fontSize: 30 }}>✓</Text>
            </View>
            <Text style={styles.modalTitle}>SUCCESS!</Text>
            <Text style={styles.modalSub}>
              Your account has been created successfully.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={closeAndSignIn}
            >
              <Text style={styles.modalButtonText}>SIGN IN NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* --- CARD LOGIN KAMU --- */}
      <View style={styles.loginCard}>
        <Text style={styles.logoText}>
          MOCK<Text style={{ color: "#D4AF37" }}>N</Text>ROLLS
        </Text>
        <Text style={styles.subtitle}>
          {isSignUp ? "Create your account" : "Welcome back, foodies!"}
        </Text>

        {isSignUp && (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>FULL NAME</Text>
            <TextInput
              placeholder="Your Name"
              placeholderTextColor="rgba(255,255,255,0.3)"
              style={styles.input}
            />
          </View>
        )}

        <View style={styles.inputContainer}>
          <Text style={styles.label}>EMAIL ADDRESS</Text>
          <TextInput
            placeholder="example@mail.com"
            placeholderTextColor="rgba(255,255,255,0.3)"
            style={styles.input}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            placeholder="••••••••"
            placeholderTextColor="rgba(255,255,255,0.3)"
            secureTextEntry
            style={styles.input}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleAuth}>
          <Text style={styles.buttonText}>
            {isSignUp ? "CREATE ACCOUNT" : "SIGN IN TO ORDER"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsSignUp(!isSignUp)}
          style={{ marginTop: 20 }}
        >
          <Text style={styles.switchText}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050505",
  },
  loginCard: {
    width: Platform.OS === "web" ? 400 : width * 0.9,
    padding: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.2)",
    alignItems: "center",
  },
  // ... (style logo, input, button sama seperti sebelumnya)
  logoText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "900",
    letterSpacing: 5,
    marginBottom: 10,
  },
  subtitle: {
    color: "#888",
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 30,
    textTransform: "uppercase",
  },
  inputContainer: { width: "100%", marginBottom: 20 },
  label: {
    color: "#D4AF37",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: "#fff",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#D4AF37",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 2,
  },
  switchText: { color: "#D4AF37", fontSize: 12, fontWeight: "500" },

  // --- STYLE MODAL BARU ---
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)", // Gelapkan background belakang
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#111",
    padding: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D4AF37",
    alignItems: "center",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#D4AF37",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 3,
    marginBottom: 10,
  },
  modalSub: {
    color: "#aaa",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 18,
  },
  modalButton: {
    backgroundColor: "#D4AF37",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 11,
    letterSpacing: 1,
  },
});
