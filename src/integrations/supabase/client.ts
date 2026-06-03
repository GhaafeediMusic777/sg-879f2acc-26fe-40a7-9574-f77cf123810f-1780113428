import { createClient, SupabaseClient as SupabaseClientType } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

// Create Supabase client with proper typing
export const supabase = createClient(supabaseUrl, supabaseAnonKey) as SupabaseClientType

// Helper function to safely query Supabase
export async function safeSupabaseQuery<T>(
  query: () => Promise<{ data: T | null; error: any }>
): Promise<{ data: T | null; error: any }> {
  try {
    return await query()
  } catch (error) {
    console.error('Supabase query error:', error)
    return { data: null, error }
  }
}

// Type definitions for better TypeScript support
export type SupabaseClient = typeof supabase
