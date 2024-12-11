import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cabañas Paradise Chapadmalal",
  description: "Cabañas de Mar, Paradise Chapadmalal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          {/* <div className="sm:hidden m-2 p-4 border rounded-lg">
            <SidebarTrigger />
          </div> */}
          <main className="relative w-full flex flex-col">
            <div className="sm:hidden sticky top-0 bg-white z-10 flex flex-row justify-between py-2 px-4 border-b-2">
              <h2 className="text-xl font-bold">Paradise</h2>
              <SidebarTrigger />
            </div>
            {children}
            <Footer />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
