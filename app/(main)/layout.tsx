import type { Metadata } from "next";
import "../globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactIcons from '@/components/ContactIcons'

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
    <>
      <Navbar />
      <ContactIcons />
      {children}
      <Footer />
    </>
  );
}
