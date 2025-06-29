"use client";

export default function BusPage() {
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

      {/* Input field on the left side */}
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