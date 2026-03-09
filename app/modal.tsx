import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

// Pastikan file ini ada di: MockNRoll/context/CartContext.tsx
import { useCart } from "../context/CartContext";

export default function AuthModal() {
  const router = useRouter();
  const { login } = useCart();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleAuth = () => {
    if (!email || !password || (!isLogin && !name)) {
      Alert.alert("Access Denied", "Please complete the prestigious details required.");
      return;
    }

    login({
      id: Date.now(),
      name: isLogin ? email.split('@')[0] : name,
    });

    // Kembali ke landing page setelah login
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.brandText}>MOCK<Text style={{color: '#D4AF37'}}>N</Text>ROLL</Text>
            <View style={styles.goldLine} />
            <Text style={styles.title}>{isLogin ? "Welcome Back" : "Create Account"}</Text>
            <Text style={styles.subtitle}>
              {isLogin ? "Access your exclusive lounge." : "Join our elite circle of connoisseurs."}
            </Text>
          </View>

          <View style={styles.form}>
            {!isLogin && (
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#555"
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            )}
            
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#555"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#555"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.mainBtn} onPress={handleAuth}>
              <Text style={styles.mainBtnText}>{isLogin ? "SIGN IN" : "REGISTER"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              {isLogin ? "New to the experience?" : "Already a member?"}
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.switchText}>
                {isLogin ? " Create an account" : " Back to Login"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#050505" },
  scrollContainer: { flexGrow: 1, justifyContent: "center", padding: 25 },
  card: {
    backgroundColor: "#0F0F0F",
    borderRadius: 30,
    padding: 40,
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.2)",
    shadowColor: "#D4AF37",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  header: { alignItems: "center", marginBottom: 35 },
  brandText: { fontSize: 24, fontWeight: "900", color: "#FFF", letterSpacing: 6, marginBottom: 10 },
  goldLine: { width: 40, height: 2, backgroundColor: "#D4AF37", marginBottom: 25 },
  title: { fontSize: 28, fontWeight: "700", color: "white", textAlign: "center" },
  subtitle: { color: "#888", marginTop: 8, textAlign: "center", fontSize: 14 },
  form: { gap: 20 },
  input: {
    backgroundColor: "#161616",
    borderRadius: 15,
    padding: 20,
    color: "white",
    borderWidth: 1,
    borderColor: "#222",
  },
  mainBtn: {
    backgroundColor: "#D4AF37",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 15,
  },
  mainBtnText: { color: "#000", fontWeight: "bold", letterSpacing: 2 },
  footer: { marginTop: 30, flexDirection: "row", justifyContent: "center", gap: 5 },
  footerText: { color: "#666" },
  switchText: { color: "#D4AF37", fontWeight: "bold" },
});