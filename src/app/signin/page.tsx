import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | AlluNeed Admin",
  description: "Sign in to AlluNeed Admin Dashboard",
};

export default function SignIn() {
  return <SignInForm />;
}
