import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshay Kumar - Software Intern Portfolio",
  description: "Portfolio website of Akshay Kumar, Software Development Intern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
