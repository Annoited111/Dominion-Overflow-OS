import { supabase } from './supabaseClient';

export async function fetchRealEstate() {
  const { data, error } = await supabase
    .from('real_estate_brain')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Fetch error:', error);
    return [];
  }

  return data;
}
