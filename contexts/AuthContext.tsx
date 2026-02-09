import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/authService";

interface AuthContextType {
  user: any;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  register: (
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    password: string,
    countryCode?: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Sync auth state from localStorage on mount and whenever login/logout happens anywhere (modals, cart, full page)
  useEffect(() => {
    const syncUser = () => {
      const currentUser = authService.getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    };
    syncUser();
    window.addEventListener("auth-change", syncUser);
    window.addEventListener("storage", syncUser);
    return () => {
      window.removeEventListener("auth-change", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  const login = async (email: string, password: string) => {
    const data = await authService.login(email, password);
    setUser({ email }); // In real app, use data.user
    return data;
  };

  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    password: string,
    countryCode: string = "44"
  ) => {
    await authService.register(
      firstName,
      lastName,
      email,
      mobile,
      password,
      countryCode
    );
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
