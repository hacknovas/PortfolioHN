import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css"
// import "@/utils/DB/connection"

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
});

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
