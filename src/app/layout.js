import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Providers from "./Providers";
import Navbar from "./components/Navbar";
import Searchbox from "../components/Searchbox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imdb clone",
  description: "Imdb clone created in nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <Searchbox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
