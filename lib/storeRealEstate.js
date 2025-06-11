import { embedText } from './embedText';
import { supabase } from './supabaseClient';

// Save real estate deal to Supabase
export async function storeRealEstate({ title, content }) {
  const embedding = await embedText(content);

  const { error } = await supabase.from('real_estate_brain').insert({
    title,
    content,
    embedding,
  });

  if (error) {
    console.error('Insert error:', error);
    alert('❌ Failed to save property.');
  } else {
    alert('✅ Property uploaded!');
  }
}
