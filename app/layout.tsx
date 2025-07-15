import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // choose what you need
  display: 'swap',
});


export const metadata: Metadata = {
  title: "ClassFlow",
  description: "Welcome to ClassFlow",
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
      </body>
    </html>
  );
}
