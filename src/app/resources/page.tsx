import type { Metadata } from "next";
import ResourcesRoute from "../../routes/resources";

export const metadata: Metadata = {
  title: "Mental Health Resources for Students — Helplines, Guides & Tools",
  description:
    "Access curated mental health resources for college students. Emergency helpline numbers, self-help guides, crisis support contacts, and evidence-based wellness tools — all in one place.",
  alternates: {
    canonical: "https://www.peacecode.in/resources",
  },
  openGraph: {
    title: "Mental Health Resources for Students | Peace Code",
    description:
      "Emergency helplines, self-help guides, crisis support, and evidence-based wellness tools curated for college students.",
    url: "https://www.peacecode.in/resources",
    type: "website",
  },
};

export default function ResourcesPage() {
  return <ResourcesRoute />;
}
