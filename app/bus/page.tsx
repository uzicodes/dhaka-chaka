"use client";

import { useState } from 'react';

interface BusRoute {
  id: string;
  busNumber: string;
  busName: string;
  route: {
    from: string;
    via: string[];
    to: string;
  };
}

// Bus route data
const busRoutes: BusRoute[] = [
  {
    id: '1',
    busNumber: '1',
    busName: 'Dhaka Nagar Paribahan',
    route: {
      from: 'Keraniganj Ghatchar Depot',
      via: ['Basila', 'Mohammadpur Bus Stand', 'Shankar', 'Jhigatla', 'Science Lab', 'Shahbag', 'Motso Bhavan', 'Dainik Bangla', 'Shapla Chattar', 'Notre Dame College', 'Ittefaq Mor', 'Sayedabad', 'Jatrabari', 'Matuail', 'Sign Board', 'Kachpur'],
      to: 'Chittagong Road'
    }
  },
  {
    id: '2',
    busNumber: '2',
    busName: 'Anabil Super',
    route: {
      from: 'Gazipur Chowrasta',
      via: ['Uttara', 'Airport', 'Kuril Flyover', 'Badda', 'Khilgaon', 'Basabo', 'Titipara', 'Sayedabad', 'Jatrabari', 'Postogola'],
      to: 'Signboard'
    }
  },
  {
    id: '3',
    busNumber: '3',
    busName: 'Thikana Express',
    route: {
      from: 'Jirani',
      via: ['EPZ', 'Nobin Nagar', 'Savar', 'Gabtoli', 'Kallynpur', 'Shyamoli', 'College Gate', 'Asad Gate', 'Kolbagan', 'New Market', 'Chankharpol', 'Gulistan', 'Sayedabad'],
      to: 'Sayedabad'
    }
  },
  {
    id: '4',
    busNumber: '4',
    busName: 'Raida Enterprise',
    route: {
      from: 'Diabari Chowrasta',
      via: ['Uttara', 'Airport', 'Kuril Flyover', 'Badda', 'Khilgaon', 'Basabo', 'Titipara', 'Sayedabad', 'Jatrabari', 'Postogola'],
      to: 'Postogola'
    }
  },
  {
    id: '5',
    busNumber: '5',
    busName: 'Turag',
    route: {
      from: 'Tongi',
      via: ['Abdullahpur', 'Airport', 'Kuril', 'Natun Bazar', 'Badda', 'Rampura', 'Malibagh', 'Khilgaon', 'Bashabo', 'Mugda', 'Maniknagar', 'Sayedabad', 'Jatrabari'],
      to: 'Jatrabari'
    }
  },
  {
    id: '6',
    busNumber: '8',
    busName: '8 Number',
    route: {
      from: 'Gabtoli',
      via: ['Shyamoli', 'Farmgate', 'Shahbagh', 'Motijheel', 'Sayedabad'],
      to: 'Jatrabari'
    }
  },
  {
    id: '7',
    busNumber: '7',
    busName: 'Alif',
    route: {
      from: 'Mirpur Sony Cinema Hall',
      via: ['Mirpur 10', 'Kazipara', 'Shewrapara', 'Mohakhali', 'Gulshan 1', 'Badda', 'Rampura'],
      to: 'Banasree'
    }
  },
  {
    id: '8',
    busNumber: '8',
    busName: 'Trans Silva',
    route: {
      from: 'Mirpur 1',
      via: ['Technical', 'Kolyanpur', 'Asadgate', 'Kolabagan', 'Science Lab', 'Shahbag', 'Press Club', 'Gulistan', 'Motijhil'],
      to: 'Jatrabari'
    }
  },
  {
    id: '9',
    busNumber: '9',
    busName: 'Boishakhi',
    route: {
      from: 'Savar',
      via: ['Gabtoli', 'Kolyanpur', 'Shyamoli', 'Agargaon', 'Bijoy Shoroni', 'BAF Shaheen College', 'Mohakhali', 'Gulshan 1', 'Badda Link Road'],
      to: 'Notun Bazar'
    }
  }
];

export default function BusPage() {
  const [locationInput, setLocationInput] = useState('');
  const [showLocationOptions, setShowLocationOptions] = useState(false);
  const [destinationInput, setDestinationInput] = useState('');
  const [showDestinationOptions, setShowDestinationOptions] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Get all unique stops for autocomplete
  const getAllStops = () => {
    const stops = new Set<string>();
    busRoutes.forEach(bus => {
      stops.add(bus.route.from);
      bus.route.via.forEach(stop => stops.add(stop));
      stops.add(bus.route.to);
    });
    return Array.from(stops).sort();
  };

  const allStops = getAllStops();

  // Filter options based on input
  const filteredFromOptions = allStops.filter(option =>
    option.toLowerCase().includes(locationInput.toLowerCase())
  );

  const filteredToOptions = allStops.filter(option =>
    option.toLowerCase().includes(destinationInput.toLowerCase())
  );

  // Find matching buses (bidirectional)
  const findMatchingBuses = (from: string, to: string): BusRoute[] => {
    if (!from || !to) return [];
    
    return busRoutes.filter(bus => {
      const allStops = [bus.route.from, ...bus.route.via, bus.route.to];
      const fromIndex = allStops.findIndex(stop => 
        stop.toLowerCase().includes(from.toLowerCase())
      );
      const toIndex = allStops.findIndex(stop => 
        stop.toLowerCase().includes(to.toLowerCase())
      );
      
      // Check if both locations exist in the route (bidirectional)
      return fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex;
    });
  };

  const matchingBuses = findMatchingBuses(locationInput, destinationInput);

  const handleLocationSelect = (option: string) => {
    setLocationInput(option);
    setShowLocationOptions(false);
  };

  const handleDestinationSelect = (option: string) => {
    setDestinationInput(option);
    setShowDestinationOptions(false);
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
        {showLocationOptions && filteredFromOptions.length > 0 && (
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
            {filteredFromOptions.map((option: string, index: number) => (
              <div
                key={index}
                onClick={() => handleLocationSelect(option)}
                style={{
                  padding: '10px 15px',
                  cursor: 'pointer',
                  borderBottom: index < filteredFromOptions.length - 1 ? '1px solid #eee' : 'none',
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
          onChange={(e) => { setDestinationInput(e.target.value); setShowDestinationOptions(true); }}
          onFocus={(e) => { e.target.style.outlineOffset = '5px'; e.target.style.backgroundColor = '#fff'; setShowDestinationOptions(true); }}
          onBlur={(e) => { e.target.style.outlineOffset = '3px'; e.target.style.backgroundColor = '#e2e2e2'; setTimeout(() => setShowDestinationOptions(false), 200); }}
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
        {showDestinationOptions && filteredToOptions.length > 0 && (
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
            {filteredToOptions.map((option: string, index: number) => (
              <div
                key={index}
                onClick={() => handleDestinationSelect(option)}
                style={{
                  padding: '10px 15px',
                  cursor: 'pointer',
                  borderBottom: index < filteredToOptions.length - 1 ? '1px solid #eee' : 'none',
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

      {/* Search Button */}
      <div style={{
        position: 'absolute',
        left: '51.3%',
        top: '216%',
        transform: 'translate(-50%, 0)',
        textAlign: 'center'
      }}>
        <button
          onClick={() => {
            setHasSearched(true);
          }}
          style={{
            background: 'linear-gradient(90deg, #FEBF00 0%, #FFDE7D 100%)',
            color: '#222',
            border: 'none',
            borderRadius: '25px',
            padding: '12px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease',
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
        >
          🔍 Search Buses
        </button>
      </div>

      {/* Bus Results Display */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '250%',
        transform: 'translate(-50%, 0)',
        width: '700px',
        maxHeight: 'none',
        overflowY: 'visible'
      }}>
        {!hasSearched ? (
          <div style={{
            textAlign: 'center',
            color: '#666',
            fontSize: '18px',
            padding: '2rem'
          }}>
            Select your current location and destination, then click Search Buses
          </div>
        ) : hasSearched && (
          <div>

            {matchingBuses.map((bus) => (
              <div key={bus.id} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                margin: '1rem 0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      margin: '0 0 0.5rem 0', 
                      color: '#FEBF00', 
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}>
                      {bus.busName}
                    </h4>
                    <p style={{ 
                      margin: '0 0 0.5rem 0', 
                      fontSize: '16px', 
                      color: '#333',
                      fontWeight: '500'
                    }}>
                      {bus.route.from} → {bus.route.to}
                    </p>
                    <p style={{ 
                      margin: '0', 
                      fontSize: '14px', 
                      color: '#666',
                      lineHeight: '1.4'
                    }}>
                      <strong>Via:</strong> {bus.route.via.join(' → ')}
                    </p>
                  </div>

                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid #eee',
                  fontSize: '14px',
                  color: '#666'
                }}>
                  <span>🚌 {bus.route.via.length + 2} stops total</span>
                  <span>📍 Covers your route</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 