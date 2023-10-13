/** @format */
import "./globals.css";
import NavBar from "../components/NavBar";
import { exo2, orbitron } from "./fonts";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${exo2.variable} ${orbitron.variable}`}>
      <body className='flex flex-col min-h-screen px-4 py-2 bg-orange-50'>
        <header>
          <NavBar />
        </header>
        <main className='py-3 grow'> {children}</main>
        <footer className='py-3 text-xs text-center border-t text-slate-500'>
          Game data and images courtesy of{" "}
          <a
            href='https://rawg.io/'
            target='_blank'
            className='text-orange-800 hover:underline'>
            RAWG
          </a>
          {" "} | Deployed on Vercel
        </footer>
      </body>
    </html>
  );
}
