import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "TradeFlow",
  description: "Welcome to TradeFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased`}
      >
        {children}

        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
      </body>
    </html>
  );
}
