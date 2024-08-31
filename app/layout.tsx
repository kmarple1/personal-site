import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { ThemeProvider } from "next-themes";

import InnerLayout from "./innerLayout";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle Marple - Personal Site and Portfolio",
  description: "A personal site to serve as a resume and portfolio for Kyle Marple (me)",
};

// istanbul ignore next: RTL won't support testing this component because of the <html> wrapper
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
          <InnerLayout>{children}</InnerLayout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
