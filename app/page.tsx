"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Bus, Train } from 'lucide-react';
import React, { useEffect, useState } from "react";

const HOMEPAGE_IMAGES = [
  "/homepage img/1.jpg",
  "/homepage img/2.jpg",
  "/homepage img/3.jpg",
  "/homepage img/4.jpg",
  "/homepage img/5.jpg",
];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % HOMEPAGE_IMAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Blurred Rotating Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        {HOMEPAGE_IMAGES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt="Dhaka landmark"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              filter: `blur(6px) brightness(0.7)`,
              opacity: bgIndex === idx ? 1 : 0,
              transition: 'opacity 1.2s',
            }}
            draggable={false}
          />
        ))}
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <div className="row center-align" style={{ marginTop: '2rem' }}>
          <h1 className="header" style={{ color: '#111', fontFamily: 'Truculenta, Arial, sans-serif', letterSpacing: '2px' }}>welcome to go-dhaka !</h1>
        </div>
        {/* Preference Question */}
        <div style={{ textAlign: 'center', margin: '2rem 0 1rem 0', fontSize: '1.3rem', fontWeight: 600, letterSpacing: '1px', color: '#eb1d1d' }}>
          what do you prefer to go with today ?
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
                <a href="/bus" className="button" style={{ textDecoration: 'none' }}>
                  <span className="text">Explore</span>
                  <span className="svg">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </a>
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
                <a href="/metro" className="button" style={{ textDecoration: 'none' }}>
                  <span className="text">Explore</span>
                  <span className="svg">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
