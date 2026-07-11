import type { Metadata } from "next";
import CancellationContent from "./CancellationContent";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy — Peace Code Therapy Sessions",
  description:
    "Peace Code's cancellation and refund policy for therapy sessions and subscriptions. 24-hour cancellation notice required. Learn about late cancellations, no-shows, and extenuating circumstances.",
  alternates: {
    canonical: "https://www.peacecode.in/cancellation",
  },
  openGraph: {
    title: "Cancellation & Refund Policy | Peace Code",
    description:
      "Understand Peace Code's cancellation and refund policy for therapy sessions and premium subscriptions.",
    url: "https://www.peacecode.in/cancellation",
    type: "website",
  },
};

export default function CancellationPage() {
  return <CancellationContent />;
}
