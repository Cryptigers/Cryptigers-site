import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cryptigers — Web3 Identity",
  description: "Pixel-souled, decentralized, neon-native. Born in the blockchain jungle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body className={`${spaceMono.variable} antialiased scanlines`}>        {children}
      </body>
    </html>
  );
}