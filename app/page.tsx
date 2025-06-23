import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="section">
      {/* Hero Section */}
      <div className="row center-align" style={{ marginTop: '2rem' }}>
        <h1 className="header" style={{ color: '#111', fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '2px' }}>Welcome to go-dhaka</h1>
        <h5 className="grey-text">Your Next.js Journey Starts Here</h5>
        <a href="/about" className="waves-effect waves-light btn-large blue">
          <i className="material-icons left">info</i>
          Learn More
        </a>
      </div>

      {/* Features Section */}
      <div className="row" style={{ marginTop: '4rem' }}>
        <div className="col s12 m4">
          <div className="card-panel center-align">
            <i className="material-icons large blue-text">speed</i>
            <h5>Fast & Efficient</h5>
            <p>Built with Next.js for optimal performance</p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card-panel center-align">
            <i className="material-icons large blue-text">brush</i>
            <h5>Beautiful Design</h5>
            <p>Styled with Materialize CSS framework</p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card-panel center-align">
            <i className="material-icons large blue-text">code</i>
            <h5>TypeScript Ready</h5>
            <p>Type-safe development experience</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="row center-align" style={{ marginTop: '3rem' }}>
        <h4>Ready to Get Started?</h4>
        <p className="flow-text">Join us on this exciting journey!</p>
        <a href="/contact" className="waves-effect waves-light btn-large blue">
          <i className="material-icons left">send</i>
          Contact Us
        </a>
      </div>
    </div>
  );
}
