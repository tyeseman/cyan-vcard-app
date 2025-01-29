import { createClient } from "@supabase/supabase-js"
import type { Database } from "./database.types"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing environment variables for Supabase. Please check your .env file.")
}

