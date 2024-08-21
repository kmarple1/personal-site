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
      <body className={`antialiased ${inter.className}`}>
        {/* next-themes uses the color-scheme CSS property to differentiate light and dark themes,
        but Tailwind is watching for a CSS class. */}
        <Script id="theme-detector">{`
          const theme = document.documentElement.style.colorScheme
          document.documentElement.classList.add(theme)
        `}</Script>
        <ThemeProvider>
          <div className="flex h-full w-full flex-col bg-base-100 text-base-content">
            <Header />
            <div className="w-full">
              <main className="mx-auto max-w-8xl p-4 sm:px-6 md:px-8">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
