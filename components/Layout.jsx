// npm
import Head from "next/head";
// files
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Tech Ecomm</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
