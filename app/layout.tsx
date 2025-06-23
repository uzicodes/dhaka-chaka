import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhaka Chaka",
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" async></script>
      </head>
      <body className={inter.className}>
        <nav className="blue darken-2">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">Dhaka Chaka</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <main className="container">
          {children}
        </main>
        <footer className="page-footer blue darken-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Dhaka Chaka</h5>
                <p className="grey-text text-lighten-4">Your awesome Next.js app with Materialize CSS.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2024 Dhaka Chaka
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
