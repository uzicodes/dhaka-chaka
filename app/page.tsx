import Image from "next/image";
import styles from "./page.module.css";
import { Bus, Train } from 'lucide-react';

export default function Home() {
  return (
    <div className="section">
      {/* Hero Section */}
      <div className="row center-align" style={{ marginTop: '2rem' }}>
        <h1 className="header" style={{ color: '#111', fontFamily: 'Truculenta, Arial, sans-serif', letterSpacing: '2px' }}>welcome to go-dhaka !</h1>
      </div>
      {/* Preference Question */}
      <div style={{ textAlign: 'center', margin: '2rem 0 1rem 0', fontSize: '1.3rem', fontWeight: 600, letterSpacing: '1px' }}>
        <span style={{ color: '#eb1d1d' }}>what do you </span>
        <span style={{ color: '#0e6251' }}>prefer to go </span>
        <span style={{ color: '#eb1d1d' }}> with today ?</span>
      </div>
      {/* Travel Options */}
      <div className="row center-align" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        {/* Bus Option */}
        <div className="card" style={{ width: '260px' }}>
          <div className="card__shine"></div>
          <div className="card__glow"></div>
          <div className="card__content">
            <div className="card__image">
              <img src="/bus.jpg" alt="Bus" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
            </div>
            <div className="card__text">
              <h3 className="card__title">Bus</h3>
              <p className="card__description">Find bus routes, fares, and real-time updates</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0' }}>
              <button className="button">
                <span className="text">Explore</span>
                <span className="svg">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Metro Option */}
        <div className="card" style={{ width: '260px' }}>
          <div className="card__shine"></div>
          <div className="card__glow"></div>
          <div className="card__content">
            <div className="card__image">
              <img src="/metro.jpg" alt="Metro Rail" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
            </div>
            <div className="card__text">
              <h3 className="card__title">Metro Rail</h3>
              <p className="card__description">Explore metro lines, stations, and journey planning</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0' }}>
              <button className="button">
                <span className="text">Explore</span>
                <span className="svg">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
