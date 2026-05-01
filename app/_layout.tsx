import { Stack } from "expo-router";
import { CartProvider } from "../context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#0A192F" },
          animation: "fade",
        }}
      >
        <Stack.Screen name="index" />

        <Stack.Screen name="(auth)/login" />

        <Stack.Screen
          name="(admin)/dashboard"
          options={{
            gestureEnabled: false,
          }}
        />

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