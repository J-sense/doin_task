import { AuthContainer } from "@/components/auth/auth-container";
import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - ByteSpace",
  description: "Sign in to your ByteSpace account to access your courses and learning paths.",
};

export default function LoginPage() {
  return (
    <AuthContainer>
      <LoginForm />
    </AuthContainer>
  );
}
