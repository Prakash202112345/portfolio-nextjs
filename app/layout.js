import { Geist, Geist_Mono } from "next/font/google";
import "./styles/styles.css";
import "./styles/vendor.css";
import Head from "next/head";
import Header from "./component/Header/Header";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prakash Sharma - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <script src="/js/plugins.js" defer></script>
        <script src="/js/main.js" defer></script>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} id="top">

        <div id="page" className="s-pagewrap">
          <Header />
          {children}

          <Footer />
        </div>
        
      </body>
      
    </html>
  );
}
