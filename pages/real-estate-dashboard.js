import React from 'react';

export default function RealEstateDashboard() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '40px' }}>
      <h1 style={{ color: '#0070f3' }}>🏡 Saved Real Estate Deals</h1>
      <p>This is where all your saved or analyzed real estate opportunities will show up.</p>

      <ul>
        <li>🏠 123 Liberty Lane, Newark, NJ – ARV: $480,000</li>
        <li>🏘️ 456 Grace Avenue, Trenton, NJ – Off-Market Potential</li>
        <li>🏚️ 789 Overflow Rd, Camden, NJ – Distressed & Pre-Foreclosure</li>
      </ul>

      <p style={{ marginTop: '30px' }}>More features like filters, map view, and automated deal scoring coming soon.</p>
    </div>
  );
}
 
