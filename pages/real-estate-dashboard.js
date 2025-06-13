// pages/real-estate-dashboard.js

import React, { useEffect, useState } from 'react';
import fetchRealEstate from '../lib/fetchRealEstate';

export default function RealEstateDashboard() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function getDeals() {
      const savedDeals = await fetchRealEstate();
      setDeals(savedDeals);
    }
    getDeals();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📊 Saved Real Estate Deals</h1>
      <ul>
        {deals.map((deal, index) => (
          <li key={index}>
            <strong>{deal.propertyName}</strong> - {deal.location} - ${deal.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
