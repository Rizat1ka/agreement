import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kjqdqlgjkslfpshvdiqj.supabase.co'
const supabaseAnonKey = 'sb_publishable_fDxyINRlaOO8a7DnzkS5kA_2lyJPhvQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)