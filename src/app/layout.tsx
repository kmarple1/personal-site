import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import Header from "./components/header/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle Marple - Personal Site and Portfolio",
  description: "A personal site to serve as a resume and portfolio for Kyle Marple (me)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* next-themes uses the color-scheme CSS property to differentiate light and dark themes,
        but Tailwind is watching for a CSS class. */}
        <Script id="theme-detector">{`
          const theme = document.documentElement.style.colorScheme
          document.documentElement.classList.add(theme)
        `}</Script>
        <ThemeProvider>
          <div className="min-w-screen flex min-h-screen flex-col bg-base-100 text-base-content">
            <Header />
            <main className="flex w-full grow p-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
