"use client";

import { useState } from 'react';

export default function BusPage() {
  const [locationInput, setLocationInput] = useState('');
  const [showLocationOptions, setShowLocationOptions] = useState(false);
  const [destinationInput, setDestinationInput] = useState('');

  // Predefined location options
  const locationOptions = [
    'Savar',
    'Gabtoli',
    'Darus Salam',
    'Technical',
    'Kallyanpur',
    'Shymoli',
    'Shishu Mela',
    'College Gate',
    'Asad Gate',
    'Kalabagan',
    'New Market',
    'Dhaka University',
    'Azimpur',
    'Lalbagh Fort',
    'Sadar Ghat'
  ];

  // Filter options based on input
  const filteredOptions = locationOptions.filter(option =>
    option.toLowerCase().includes(locationInput.toLowerCase())
  );

  const handleLocationSelect = (option: string) => {
    setLocationInput(option);
    setShowLocationOptions(false);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', position: 'relative' }}>
      <h1 style={{ fontFamily: 'Alumni Sans SC', fontWeight: 700, color: 'black', marginTop: '-2rem', marginLeft: '3rem' }}>Dhaka Intra-City Service</h1>
      
      {/* Text above left input box */}
      <div style={{ 
        position: 'absolute', 
        left: '17rem', 
        top: '95%', 
        fontSize: '18px',
        fontWeight: 500,
        color: '#914C07'
      }}>
        where you at ?
      </div>
      

      {/* Text above Right input box */}
      <div style={{ 
        position: 'absolute', 
        right: '13.2rem', 
        top: '95%', 
        fontSize: '18px',
        fontWeight: 500,
        color: '#914C07'
      }}>
        where you going ?
      </div>

      {/* Input field on the left side with searchable dropdown */}
      <div style={{ 
        position: 'absolute', 
        left: '10.2rem', 
        top: '160%', 
        transform: 'translateY(-50%)',
        width: '300px'
      }}>
        <input 
          type="text" 
          placeholder="Your Location..." 
          value={locationInput}
          onChange={(e) => {
            setLocationInput(e.target.value);
            setShowLocationOptions(true);
          }}
          onFocus={(e) => {
            e.target.style.outlineOffset = '5px';
            e.target.style.backgroundColor = '#fff';
            setShowLocationOptions(true);
          }}
          onBlur={(e) => {
            e.target.style.outlineOffset = '3px';
            e.target.style.backgroundColor = '#e2e2e2';
            // Delay hiding options to allow clicking on them
            setTimeout(() => setShowLocationOptions(false), 200);
          }}
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
        
        {/* Dropdown options */}
        {showLocationOptions && filteredOptions.length > 0 && (
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
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleLocationSelect(option)}
                style={{
                  padding: '10px 15px',
                  cursor: 'pointer',
                  borderBottom: index < filteredOptions.length - 1 ? '1px solid #eee' : 'none',
                  fontSize: '14px',
                  color: 'black',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
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
        right: '9.1rem', 
        top: '160%', 
        transform: 'translateY(-50%)',
        width: '300px'
      }}>
        <input 
          type="text" 
          placeholder="Destination..." 
          value={destinationInput}
          onChange={(e) => setDestinationInput(e.target.value)}
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
          onFocus={(e) => {
            e.target.style.outlineOffset = '5px';
            e.target.style.backgroundColor = '#fff';
          }}
          onBlur={(e) => {
            e.target.style.outlineOffset = '3px';
            e.target.style.backgroundColor = '#e2e2e2';
          }}
        />
      </div>
    </div>
  );
} 