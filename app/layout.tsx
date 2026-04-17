import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Aquatic Shipping Services | Logistics & Customs Clearance Gandhidham",
    template: "%s | Aquatic Shipping Services",
  },
  description:
    "Aquatic Shipping Services — trusted logistics partner in Gandhidham, Gujarat. Expert customs clearance, freight forwarding, warehousing, and inland transportation across India.",
  keywords: [
    "logistics company Gandhidham",
    "customs clearance Gujarat",
    "freight forwarding India",
    "inland transportation Kutch",
    "warehousing Gandhidham",
    "import export clearance",
  ],
  openGraph: {
    title: "Aquatic Shipping Services",
    description: "Premium logistics and customs clearance from Gandhidham, Gujarat.",
    url: "https://aquaticshipping.in",
    siteName: "Aquatic Shipping Services",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
