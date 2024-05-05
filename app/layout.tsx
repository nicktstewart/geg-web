import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurii Eco Games",
  description: "Enjoy the games you love.",
  icons: {
    icon: "/geg.ico",
    shortcut: "/geg.ico",
    apple: "/geg.ico",
  },
  openGraph: {
    title: "Gurii Eco Games",
    description: "Enjoy the games you love.",
    url: "https://www.guriieco.com/",
    siteName: "Gurii Eco Games",
    images: [
      {
        url: "https://www.guriieco.com/geg.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurii Eco Games",
    description: "Enjoy the games you love.",
    site: "@GuriiEco",
    creator: "@GuriiEco",
    images: "https://www.guriieco.com/geg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
