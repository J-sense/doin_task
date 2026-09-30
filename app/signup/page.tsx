import { AuthContainer } from "@/components/auth/auth-container";
import { SignupForm } from "@/components/auth/signup-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account - ByteSpace",
  description: "Join ByteSpace today for free and start learning from top industry experts.",
};

export default function SignupPage() {
  return (
    <AuthContainer>
      <SignupForm />
    </AuthContainer>
  );
}
