import { useState } from 'react';
import { storeKnowledge } from '../lib/storeKnowledge';

export default function KnowledgeForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await storeKnowledge(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Upload Scroll</h3>
      <input placeholder="Scroll Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Scroll Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
