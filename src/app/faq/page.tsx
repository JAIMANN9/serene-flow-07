import type { Metadata } from "next";
import FaqRoute from "../../routes/faq";

export const metadata: Metadata = {
  title: "FAQ — Common Questions About Peace Code Mental Health Platform",
  description:
    "Find answers to frequently asked questions about Peace Code. Learn about our free mental health tools, privacy practices, therapist connections, and how to get started as a college student.",
  alternates: {
    canonical: "https://www.peacecode.in/faq",
  },
  openGraph: {
    title: "FAQ — Common Questions About Peace Code | Student Mental Health",
    description:
      "Everything you need to know about Peace Code's free mental health tools, privacy, therapist access, and student support services.",
    url: "https://www.peacecode.in/faq",
    type: "website",
  },
};

export default function FaqPage() {
  return <FaqRoute />;
}
