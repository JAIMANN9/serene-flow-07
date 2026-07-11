import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — How Peace Code Protects Your Data",
  description:
    "Read Peace Code's privacy policy. Learn how we protect your personal information, health data, and screening results. HIPAA-aligned, ISO 27001 standards. Your mental health data stays private.",
  alternates: {
    canonical: "https://www.peacecode.in/privacy",
  },
  openGraph: {
    title: "Privacy Policy — How Peace Code Protects Your Data",
    description:
      "Learn how Peace Code protects your personal information with HIPAA-aligned, ISO 27001 security standards. Your data stays private.",
    url: "https://www.peacecode.in/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
