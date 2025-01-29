import { createClient } from "@supabase/supabase-js"
import type { Database } from "./database.types"

const supabaseUrl = "https://ufoeuspluyxlkdxbfxig.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmb2V1c3BsdXl4bGtkeGJmeGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMzU3MDAsImV4cCI6MjA1MzYxMTcwMH0.8K1JWLvixqAhxVZ2YEH1BBthrOi_d6mV_6QFjEmTnKc"

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

