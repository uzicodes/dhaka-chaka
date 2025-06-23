import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "go-dhaka",
  description: "A Next.js app with Materialize CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Materialize CSS and JavaScript */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" async></script>
      </head>
      <body className={inter.className}>
        <div className="modern-bg"></div>
        <nav className="modern-navbar">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo" style={{display: 'flex', alignItems: 'center'}}>
              <img src="/globe.svg" alt="go-dhaka logo" style={{height: '36px', marginRight: '12px'}} />
              go-dhaka
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down modern-nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <main className="container">
          {children}
        </main>
        <footer className="modern-footer">
          <div className="container modern-footer-content">
            <div>
              <h5 className="white-text">go-dhaka</h5>
              <p className="grey-text text-lighten-4">Your awesome Next.js app with Materialize CSS.</p>
            </div>
            <div className="modern-footer-social">
              <a href="#" aria-label="Twitter"><img src="/globe.svg" alt="Twitter" style={{height: '28px'}} /></a>
              <a href="#" aria-label="GitHub"><img src="/window.svg" alt="GitHub" style={{height: '28px'}} /></a>
            </div>
          </div>
          <div className="modern-footer-copyright">
            <div className="container">
              © 2024 go-dhaka
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
