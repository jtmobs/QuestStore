import Auth from "./auth";
import Providers from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://canim-csr.vercel.app"),
  title: "QuestStore - Shop & eCommerce ",
  description:
    "Buy QuestStore - Shop & eCommerce Next.Js QuestStore | Shop & eCommerce React Template - a responsive React template. QuestStore is built with the latest Next.Js 13 App Directory",
  openGraph: {
    title: "QuestStore - Shop & eCommerce React Template",
    description:
      "Buy QuestStore - Shop & eCommerce Next.Js Template by Hasibul Islam. Canim | Shop & eCommerce React Template - a responsive React template. Canim is built with the latest Next.Js 13 App Directory",
    url: "https://canim-csr.vercel.app",
    siteName: "QuestStore Template",
    images:
      "https://github.com/devhasibulislam/canim-ecommerce/blob/master/client/public/og.png?raw=true",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@johnmobolaji",
    title: "QuestStore - Shop & eCommerce React Template",
    description:
      "Buy QuestStore - Shop & eCommerce Next.Js Template by John Mobolaji. QuestStore | Shop & eCommerce React Template - a responsive React template. QuestStore is built with the latest Next.Js 13 App Directory",
    image:
      "https://github.com/devhasibulislam/canim-ecommerce/blob/master/client/public/og.png?raw=true",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Script
          src="https://jtmobs.github.io/tracker/tracking.js"
          strategy="afterInteractive"
      />
        <Providers>
          <Auth>{children}</Auth>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
