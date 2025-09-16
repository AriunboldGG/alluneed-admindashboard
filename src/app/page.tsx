"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("HomePage useEffect - isLoading:", isLoading, "user:", user);
    if (!isLoading) {
      if (user) {
        console.log("User is authenticated, redirecting to /admin");
        // User is authenticated, redirect to admin dashboard
        router.replace("/admin");
      } else {
        console.log("User is not authenticated, redirecting to /signin");
        // User is not authenticated, redirect to sign in
        router.replace("/signin");
      }
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-500"></div>
      </div>
    );
  }

  return null; // Will redirect based on auth state
}
