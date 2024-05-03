import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Rent A Buddy",
  description: "A rental platform where you can hire buddies for hangouts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="md:px-20">
          <Header />
          {children}
          <Toaster />
        </div>
        <Footer />
      </body>
    </html>
  );
}
