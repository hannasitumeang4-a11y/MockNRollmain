import React, { createContext, useContext, useState } from "react";

// 1. Definisikan tipe User dan Item agar tidak 'never'
interface UserType {
  id: number;
  name: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image?: string;
}

interface CartContextType {
  cart: CartItem[]; // Sekarang tipenya jelas, bukan never
  user: UserType | null;
  login: (userData: UserType) => void;
  logout: () => void;
  addToCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // 2. Beri tipe data pada useState agar tidak error 'never'
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<UserType | null>(null);

  const login = (userData: UserType) => {
    setUser(userData);
  };

  const logout = () => setUser(null);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]); // Error 'never' akan hilang di sini
  };

  return (
    <CartContext.Provider value={{ cart, user, login, logout, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};