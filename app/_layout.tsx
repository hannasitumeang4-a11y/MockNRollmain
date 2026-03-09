import { Stack } from "expo-router";
import { CartProvider } from "../context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#050505" },
        }}
      >
        {/* Halaman utama */}
        <Stack.Screen name="index" />

        {/* Rute untuk Login/Auth */}
        <Stack.Screen
          name="(auth)/login"
          options={{
            animation: "fade",
          }}
        />

        {/* Rute untuk Dashboard Admin */}
        <Stack.Screen
          name="(admin)/dashboard"
          options={{
            gestureEnabled: false,
          }}
        />

        {/* Halaman Modal */}
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            animation: "slide_from_bottom",
          }}
        />
      </Stack>
    </CartProvider>
  );
}
