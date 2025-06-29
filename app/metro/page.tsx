"use client";

import { useState } from 'react';

const stations = [
  'Uttara North',
  'Uttara Center',
  'Uttara South',
  'Pallabi',
  'Mirpur 11',
  'Mirpur 10',
  'Kazipara',
  'Shewrapara',
  'Agargaon',
  'Bijoy Sarani',
  'Farmgate',
  'Karwan Bazar',
  'Shahbagh',
  'Dhaka University',
  'Bangladesh Secretariat',
  'Motijheel'
];

// Fare matrix as per the official chart (row: from, col: to)
const fareMatrix = [
  [0, 20, 20, 30, 40, 40, 50, 50, 60, 70, 70, 80, 90, 90, 100, 100], // Uttara North
  [20, 0, 20, 20, 30, 30, 40, 40, 50, 60, 60, 70, 80, 80, 90, 90],   // Uttara Center
  [20, 20, 0, 20, 20, 20, 30, 30, 40, 50, 50, 60, 70, 70, 80, 80],   // Uttara South
  [30, 20, 20, 0, 20, 20, 20, 20, 30, 40, 40, 50, 60, 60, 70, 70],   // Pallabi
  [40, 30, 20, 20, 0, 10, 20, 20, 30, 40, 40, 50, 60, 60, 70, 70],   // Mirpur 11
  [40, 30, 20, 20, 10, 0, 10, 10, 20, 30, 30, 40, 50, 50, 60, 60],   // Mirpur 10
  [50, 40, 30, 20, 20, 10, 0, 10, 20, 30, 30, 40, 50, 50, 60, 60],   // Kazipara
  [50, 40, 30, 20, 20, 10, 10, 0, 10, 20, 20, 30, 40, 40, 50, 50],   // Shewrapara
  [60, 50, 40, 30, 30, 20, 20, 10, 0, 10, 10, 20, 30, 30, 40, 40],   // Agargaon
  [70, 60, 50, 40, 40, 30, 30, 20, 10, 0, 10, 10, 20, 20, 30, 30],   // Bijoy Sarani
  [70, 60, 50, 40, 40, 30, 30, 20, 10, 10, 0, 10, 20, 20, 30, 30],   // Farmgate
  [80, 70, 60, 50, 50, 40, 40, 30, 20, 10, 10, 0, 10, 10, 20, 20],   // Karwan Bazar
  [90, 80, 70, 60, 60, 50, 50, 40, 30, 20, 20, 10, 0, 10, 20, 20],   // Shahbagh
  [90, 80, 70, 60, 60, 50, 50, 40, 30, 20, 20, 10, 10, 0, 10, 10],   // Dhaka University
  [100, 90, 80, 70, 70, 60, 60, 50, 40, 30, 30, 20, 20, 10, 0, 10],  // Bangladesh Secretariat
  [100, 90, 80, 70, 70, 60, 60, 50, 40, 30, 30, 20, 20, 10, 10, 0],  // Motijheel
];

export default function MetroPage() {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [showFromOptions, setShowFromOptions] = useState(false);
  const [showToOptions, setShowToOptions] = useState(false);

  const filteredFrom = stations.filter(s => s.toLowerCase().includes(fromStation.toLowerCase()));
  const filteredTo = stations.filter(s => s.toLowerCase().includes(toStation.toLowerCase()));

  let fare = null;
  const fromIdx = stations.indexOf(fromStation);
  const toIdx = stations.indexOf(toStation);
  if (fromIdx !== -1 && toIdx !== -1) {
    fare = fromIdx === toIdx ? 0 : fareMatrix[fromIdx][toIdx];
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center', position: 'relative' }}>
      <h1 style={{ fontFamily: 'Alumni Sans SC', fontWeight: 700, color: 'black', marginTop: '-2rem', marginLeft: '3rem' }}>Dhaka Metro-Rail</h1>
      
      
      {/* Text above left input box */}
      <div style={{ 
        position: 'absolute', 
        left: '15.4rem', 
        top: '95%', 
        fontSize: '18px',
        fontWeight: 500,
        color: '#914C07'
      }}>
        station you're at ?
      </div>
      

      {/* Text above Right input box */}
      <div style={{ 
        position: 'absolute', 
        right: '12.8rem', 
        top: '95%', 
        fontSize: '18px',
        fontWeight: 500,
        color: '#914C07'
      }}>
        station you're going ?
      </div>

      {/* Input field on the left side */}
      <div style={{ 
        position: 'absolute', 
        left: '10rem', 
        top: '160%', 
        transform: 'translateY(-50%)',
        width: '300px'
      }}>
        <input 
          type="text" 
          placeholder="Your Location..." 
          value={fromStation}
          onChange={e => { setFromStation(e.target.value); setShowFromOptions(true); }}
          onFocus={e => { e.target.style.outlineOffset = '5px'; e.target.style.backgroundColor = '#fff'; setShowFromOptions(true); }}
          onBlur={e => { e.target.style.outlineOffset = '3px'; e.target.style.backgroundColor = '#e2e2e2'; setTimeout(() => setShowFromOptions(false), 200); }}
          style={{
            borderRadius: '20px',
            outline: '2px solid #FEBF00',
            border: '0',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            backgroundColor: '#e2e2e2',
            outlineOffset: '3px',
            padding: '10px 1rem',
            transition: '0.25s',
            width: '100%',
            fontSize: '16px',
            color: 'black'
          }}
        />
        {showFromOptions && filteredFrom.length > 0 && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            border: '2px solid #FEBF00',
            borderRadius: '10px',
            maxHeight: '200px',
            overflowY: 'auto',
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            marginTop: '5px'
          }}>
            {filteredFrom.map((option, index) => (
              <div
                key={index}
                onClick={() => { setFromStation(option); setShowFromOptions(false); }}
                style={{
                  padding: '10px 15px',
                  cursor: 'pointer',
                  borderBottom: index < filteredFrom.length - 1 ? '1px solid #eee' : 'none',
                  fontSize: '14px',
                  color: 'black',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f5f5f5'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'white'; }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input field on the right side */}
      <div style={{ 
        position: 'absolute', 
        right: '10rem', 
        top: '160%', 
        transform: 'translateY(-50%)',
        width: '300px'
      }}>
        <input 
          type="text" 
          placeholder="Destination..." 
          value={toStation}
          onChange={e => { setToStation(e.target.value); setShowToOptions(true); }}
          onFocus={e => { e.target.style.outlineOffset = '5px'; e.target.style.backgroundColor = '#fff'; setShowToOptions(true); }}
          onBlur={e => { e.target.style.outlineOffset = '3px'; e.target.style.backgroundColor = '#e2e2e2'; setTimeout(() => setShowToOptions(false), 200); }}
          style={{
            borderRadius: '20px',
            outline: '2px solid #FEBF00',
            border: '0',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            backgroundColor: '#e2e2e2',
            outlineOffset: '3px',
            padding: '10px 1rem',
            transition: '0.25s',
            width: '100%',
            fontSize: '16px',
            color: 'black'
          }}
        />
        {showToOptions && filteredTo.length > 0 && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            border: '2px solid #FEBF00',
            borderRadius: '10px',
            maxHeight: '200px',
            overflowY: 'auto',
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            marginTop: '5px'
          }}>
            {filteredTo.map((option, index) => (
              <div
                key={index}
                onClick={() => { setToStation(option); setShowToOptions(false); }}
                style={{
                  padding: '10px 15px',
                  cursor: 'pointer',
                  borderBottom: index < filteredTo.length - 1 ? '1px solid #eee' : 'none',
                  fontSize: '14px',
                  color: 'black',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f5f5f5'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'white'; }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Modern fare display below input boxes */}
      {fare !== null && (
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '210%',
          transform: 'translate(-50%, 0)',
          minWidth: '320px',
          background: 'linear-gradient(90deg, #FEBF00 0%, #FFDE7D 100%)',
          color: '#222',
          fontWeight: 700,
          fontSize: '1.5rem',
          borderRadius: '18px',
          boxShadow: '0 6px 24px rgba(0,0,0,0.10)',
          padding: '1.2rem 2.5rem',
          marginTop: '2.5rem',
          letterSpacing: '0.5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2000
        }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.5rem', color: '#914C07' }}>
            Metro Fare
          </span>
          <span style={{ fontSize: '2.2rem', fontWeight: 700, color: '#222' }}>
            ৳ {fare}
          </span>
          <span style={{ fontSize: '1rem', fontWeight: 400, marginTop: '0.5rem', color: '#333' }}>
            ({fromStation} → {toStation})
          </span>
        </div>
      )}
    </div>
    
    
    
    
    
    
    
  );
} 