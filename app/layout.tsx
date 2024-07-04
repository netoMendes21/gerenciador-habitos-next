import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerenciador de Hábitos",
  description: "Gerencie seus hábitos pelo seu celular",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dosis.className}>{children}</body>
    </html>
  );
}
