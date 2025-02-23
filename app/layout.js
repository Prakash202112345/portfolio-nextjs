"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/styles.css";
// import "./styles/vendor.css";
import Head from "next/head";
import Header from "./component/Header/Header";
import Footer from "./component/Footer";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Prakash Sharma - Portfolio",
// };



export default function RootLayout({ children }) {
  const preloaderRef = useRef(null);
  const mailChimpURL =
    "https://facebook.us1.list-manage.com/subscribe/post?u=1abf75f6981256963a47d197a&id=37c6d8f4d6";

  useEffect(() => {
    // Preloader
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      document.documentElement.classList.add("ss-preload");
      window.addEventListener("load", () => {
        document.documentElement.classList.remove("ss-preload");
        document.documentElement.classList.add("ss-loaded");

        preloader.addEventListener("transitionend", (e) => {
          if (e.target.matches("#preloader")) {
            document.body.classList.add("ss-show");
            preloader.style.display = "none";
          }
        });
      });
    }

    // Mobile Menu
    const toggleButton = document.querySelector(".s-header__menu-toggle");
    const mainNavWrap = document.querySelector(".s-header__nav");
    if (toggleButton && mainNavWrap) {
      toggleButton.addEventListener("click", (e) => {
        e.preventDefault();
        toggleButton.classList.toggle("is-clicked");
        document.body.classList.toggle("menu-is-open");
      });

      mainNavWrap.querySelectorAll(".s-header__nav a").forEach((link) => {
        link.addEventListener("click", () => {
          if (window.matchMedia("(max-width: 900px)").matches) {
            toggleButton.classList.toggle("is-clicked");
            document.body.classList.toggle("menu-is-open");
          }
        });
      });

      window.addEventListener("resize", () => {
        if (window.matchMedia("(min-width: 901px)").matches) {
          document.body.classList.remove("menu-is-open");
          toggleButton.classList.remove("is-clicked");
        }
      });
    }

    // Swiper Initialization
    new Swiper(".home-slider", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        401: { slidesPerView: 1, spaceBetween: 20 },
        801: { slidesPerView: 2, spaceBetween: 40 },
        1331: { slidesPerView: 3, spaceBetween: 48 },
        1774: { slidesPerView: 4, spaceBetween: 48 },
      },
    });

    new Swiper(".page-slider", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        401: { slidesPerView: 1, spaceBetween: 20 },
        801: { slidesPerView: 2, spaceBetween: 40 },
        1241: { slidesPerView: 3, spaceBetween: 48 },
      },
    });

    // MailChimp Form Submission
    const mcForm = document.querySelector("#mc-form");
    if (mcForm) {
      mcForm.setAttribute("novalidate", true);

      mcForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const emailField = event.target.querySelector("#mce-EMAIL");

        if (!emailField.value) {
          showMailChimpError("Please enter an email address.");
          return;
        }

        submitMailChimpForm(emailField.value);
      });
    }

    function submitMailChimpForm(email) {
      let url = mailChimpURL;
      if (!url) return;

      url = url.replace("/post?u=", "/post-json?u=");
      url += `&EMAIL=${encodeURIComponent(email)}&c=displayMailChimpStatus`;

      const script = document.createElement("script");
      script.src = url;

      script.onload = () => script.remove();
      document.body.appendChild(script);
    }

    function showMailChimpError(message) {
      const statusContainer = document.querySelector(".mc-status");
      if (statusContainer) {
        statusContainer.classList.add("error-message");
        statusContainer.textContent = message;
      }
    }

    return () => {
      window.removeEventListener("resize", () => { });
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <script src="/js/plugins.js" defer></script>
        <script src="/js/main.js" defer></script>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} id="top">

        <div id="page" className="s-pagewrap ss-home">
          <Header />
          {children}

          <Footer />
        </div>

      </body>

    </html>
  );
}
