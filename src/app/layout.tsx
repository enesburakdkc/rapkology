import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/context/sidebar-context";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { Sidebar } from "@/components/layout/sidebar";
import { Geist_Mono, Saira_Condensed } from "next/font/google";

export const metadata: Metadata = {
  title: "Rapkology Türkiye",
  description: "Rapkology, Türkçe rap dünyasından en güncel haberleri, yeni çıkan şarkıları, resmi klipleri ve özel performansları sunar. Haftanın ve ayın videolarını keşfet, rap sahnesindeki en taze gelişmeleri takip et.",
};

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-saira",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`antialiased ${saira.variable} ${mono.variable}`}
      >
        <SidebarProvider>
          <Sidebar />
          <Header />
          <Main>
            {children}
          </Main>
        </SidebarProvider>
      </body>
    </html>
  );
}
