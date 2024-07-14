import { createClient } from '@supabase/supabase-js';

import dotenv from 'dotenv';
dotenv.config();


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PRIVATE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;