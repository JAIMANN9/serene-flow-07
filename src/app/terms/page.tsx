import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions — Peace Code Usage Agreement",
  description:
    "Read Peace Code's terms and conditions. Understand your rights, our medical disclaimer, platform rules, and user agreements for accessing free mental health tools for college students.",
  alternates: {
    canonical: "https://www.peacecode.in/terms",
  },
  openGraph: {
    title: "Terms & Conditions — Peace Code Usage Agreement",
    description:
      "Understand your rights and responsibilities when using Peace Code's free mental health platform for college students.",
    url: "https://www.peacecode.in/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
