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
      {/* Travel Options */}
      <div className="row center-align" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        {/* Bus Option */}
        <div style={{ background: '#fff', borderRadius: '24px', padding: '2rem', minWidth: '220px', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '16px', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', overflow: 'hidden', padding: 0 }}>
            <img src="/bus.jpg" alt="Bus" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2563eb', marginBottom: '0.5rem' }}>Bus</h3>
          <p style={{ color: '#555', fontSize: '1rem', textAlign: 'center' }}>Find bus routes, schedules, and real-time updates</p>
        </div>
        {/* Metro Option */}
        <div style={{ background: '#fff', borderRadius: '24px', padding: '2rem', minWidth: '220px', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', borderRadius: '16px', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', overflow: 'hidden', padding: 0 }}>
            <img src="/metro.jpg" alt="Metro Rail" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#047857', marginBottom: '0.5rem' }}>Metro Rail</h3>
          <p style={{ color: '#555', fontSize: '1rem', textAlign: 'center' }}>Explore metro lines, stations, and journey planning</p>
        </div>
      </div>
    </div>
  );
}
