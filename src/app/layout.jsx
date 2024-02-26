import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Monitoring-IOT",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${gabarito.className} bg-cyan-800`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}