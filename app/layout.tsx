import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const sensation = localFont({
  src: [
    {
      path: "../public/fonts/Sansation_Regular.ttf",
      weight: "400", // Regular
      style: "normal",
    },
    {
      path: "../public/fonts/Sansation_Bold.ttf",
      weight: "700", // Bold
      style: "normal",
    },
    {
      path: "../public/fonts/Sansation_Italic.ttf",
      weight: "400", // Regular Italic
      style: "italic",
    },
    {
      path: "../public/fonts/Sansation_Bold_Italic.ttf",
      weight: "700", // Bold Italic
      style: "italic",
    },
    {
      path: "../public/fonts/Sansation_Light.ttf",
      weight: "300", // Light
      style: "normal",
    },
    {
      path: "../public/fonts/Sansation_Light_Italic.ttf",
      weight: "300", // Light Italic
      style: "italic",
    },
  ],
  variable: "--font-sensation",
});

export const metadata: Metadata = {
  title: "WellScout - Your Guide to Informed Food Choices",
  description: "Scan, search, and understand your products with WellScout.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sensation.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="bg-mesh min-h-screen">
            {children}
            <Toaster richColors />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
