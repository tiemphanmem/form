import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "Thép Tây Đô",
  description: "Thép đã tôi thế đấy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      >
        {children}
      </body>
    </html>
  );
}
