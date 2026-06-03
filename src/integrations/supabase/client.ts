import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

// Create Supabase client with proper typing
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for better TypeScript support
export type SupabaseClient = typeof supabase
