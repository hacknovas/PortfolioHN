import type { Metadata } from "next";
import { Content, Inter } from "next/font/google";
// import "@/utils/DB/connection"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prathamesh Doni",
  description: "Handled by @Doni_Prathamesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Boxicon */}
        <link rel="stylesheet" href="boxicons.min.css"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
