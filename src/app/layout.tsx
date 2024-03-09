import type { Metadata } from "next";
import { Content, Inter } from "next/font/google";
// import "@/utils/DB/connection"
import "@/app/globals.css"

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
        <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
        </link>

        {/*Devicon Icons" */}

        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
