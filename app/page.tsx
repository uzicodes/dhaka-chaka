import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="section">
      {/* Hero Section */}
      <div className="row center-align" style={{ marginTop: '2rem' }}>
        <h1 className="header" style={{ color: '#111', fontFamily: 'Truculenta, Arial, sans-serif', letterSpacing: '2px' }}>welcome to go-dhaka !</h1>
      </div>

      {/* Call to Action */}
      <div className="row center-align" style={{ marginTop: '3rem' }}>
        <a href="/contact" className="waves-effect waves-light btn-large blue">
          <i className="material-icons left">send</i>
          Contact Us
        </a>
      </div>
    </div>
  );
}
