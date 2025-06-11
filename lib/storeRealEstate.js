import { createClient } from '@supabase/supabase-js';

// Supabase config from your environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Saves real estate lead to `real_estate_brain` table.
 * @param {{ title: string; content: string }} data
 */
export async function storeRealEstate(data) {
  const { title, content } = data;

  const { error } = await supabase.from('real_estate_brain').insert([
    {
      title,
      content,
    },
  ]);

  if (error) {
    console.error('Insert error:', error);
    alert('❌ Failed to save property.');
  } else {
    alert('✅ Property deal uploaded!');
  }
}
