import { useEffect, useState } from 'react';
import { fetchRealEstate } from '../lib/fetchRealEstate';

export default function RealEstateDashboard() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function loadDeals() {
      const data = await fetchRealEstate();
      setDeals(data);
    }

    loadDeals();
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#0070f3' }}>📊 Saved Real Estate Deals</h1>
      {deals.length === 0 ? (
        <p>No deals found yet. Submit one from the AI Brain page.</p>
      ) : (
        <ul>
          {deals.map((deal, i) => (
            <li key={i} style={{ marginBottom: '20px' }}>
              <strong>Title:</strong> {deal.title}<br />
              <strong>Notes:</strong> {deal.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
