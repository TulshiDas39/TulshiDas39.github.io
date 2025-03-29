import type { Metadata } from "next";
// import { JetBrains_Mono, M_PLUS_Code_Latin  } from "next/font/google";
import { JetBrains_Mono  } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// const mPlusCodeLatin = M_PLUS_Code_Latin({
//   variable: "--font-jetbrains-mono",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
// });

export const metadata: Metadata = {
  title: "Tulshi's Portfolio",
  description: "Portfolio of Tulshi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        {/* <StairTransition /> */}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
