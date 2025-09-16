"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  role: 'super_admin' | 'admin' | 'user';
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Super admin credentials
const SUPER_ADMIN = {
  username: 'superadmin',
  password: 'admin123',
  email: 'superadmin@alluneed.com',
  role: 'super_admin' as const,
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      console.log("Checking authentication...");
      try {
        const savedUser = localStorage.getItem('user');
        console.log("Saved user from localStorage:", savedUser);
        if (savedUser) {
          try {
            const userData = JSON.parse(savedUser);
            console.log("Parsed user data:", userData);
            setUser(userData);
          } catch (error) {
            console.error("Error parsing user data:", error);
            localStorage.removeItem('user');
          }
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    console.log("AuthContext login called with:", { username, password });
    console.log("Expected credentials:", SUPER_ADMIN);
    
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check super admin credentials
    if (username === SUPER_ADMIN.username && password === SUPER_ADMIN.password) {
      console.log("Credentials match! Creating user data...");
      const userData: User = {
        id: '1',
        username: SUPER_ADMIN.username,
        email: SUPER_ADMIN.email,
        role: SUPER_ADMIN.role,
        isAuthenticated: true,
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoading(false);
      console.log("User data saved:", userData);
      return true;
    }
    
    console.log("Credentials do not match");
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
