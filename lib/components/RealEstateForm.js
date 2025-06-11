import { useState } from 'react';
import { storeRealEstate } from '../lib/storeRealEstate';

export default function RealEstateForm() {
  const [form, setForm] = useState({ name: '', notes: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await storeRealEstate(form);
    setStatus(result ? '✅ Deal saved!' : '❌ Failed to save');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <input
        name="name"
        placeholder="Property / Seller Name"
        value={form.name}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: '10px', width: '300px' }}
      />
      <textarea
        name="notes"
        placeholder="Deal notes, numbers, status..."
        value={form.notes}
        onChange={handleChange}
        required
        style={{ display: 'block', height: '100px', width: '300px' }}
      />
      <button type="submit">Save Deal</button>
      <p>{status}</p>
    </form>
  );
}
