import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Headers from "@/components/header/Header";
import Providers from "./Providers";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hash Code",
  description: "Code submission Platform",
  icons: "/code.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-primarybg">
      <body className={`${poppins.className}`}>
        <Providers>
          <Headers />
          {children}
        </Providers>
      </body>
    </html>
  );
}
