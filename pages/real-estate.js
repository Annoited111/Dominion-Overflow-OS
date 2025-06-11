import { useState } from 'react';
import { storeRealEstate } from '../lib/storeRealEstate';

export default function RealEstatePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await storeRealEstate({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#0070f3' }}>🏠 Real Estate AI Brain</h1>
      <p>Submit property deals below — AI will learn, store, and act intelligently.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Enter property title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ padding: '10px', width: '300px', marginBottom: '10px' }}
        />
        <br />
        <textarea
          placeholder="Enter property details (neighborhood, price, ARV, seller info, etc.)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          style={{ padding: '10px', width: '300px' }}
          required
        ></textarea>
        <br />
        <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>
          Upload Property
        </button>
      </form>
    </div>
  );
}
