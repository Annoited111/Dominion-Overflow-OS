import { embedText } from './embedText';
import { supabase } from './supabaseClient';

export async function storeKnowledge(title, content) {
  const embedding = await embedText(content);

  const { error } = await supabase.from('ai_knowledge_bank').insert([
    {
      title,
      content,
      embedding,
    },
  ]);

  if (error) {
    console.error('Insert error:', error);
    alert('Failed to upload scroll.');
  } else {
    alert('Scroll uploaded!');
  }
}
