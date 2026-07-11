import type { Metadata } from "next";
import ContactRoute from "../../routes/contact";

export const metadata: Metadata = {
  title: "Contact Peace Code — Get in Touch With Our Student Support Team",
  description:
    "Have questions about Peace Code? Reach out to our team for support, partnership inquiries, or feedback. We're here to help college students access free mental health resources.",
  alternates: {
    canonical: "https://www.peacecode.in/contact",
  },
  openGraph: {
    title: "Contact Peace Code — Student Support & Inquiries",
    description:
      "Reach out to Peace Code for support, partnerships, or feedback. We're here to help students access free mental health resources.",
    url: "https://www.peacecode.in/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactRoute />;
}
