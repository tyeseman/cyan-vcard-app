"use server"

import { supabase } from "../../lib/supabase"
import { revalidatePath } from "next/cache"

export async function updateProfile(userId: string, data: { full_name?: string; avatar_url?: string }) {
  try {
    const { data: profile, error } = await supabase.from("profiles").update(data).eq("id", userId).select().single()

    if (error) throw error

    revalidatePath("/dashboard")
    return { success: true, data: profile }
  } catch (error) {
    console.error("Error updating profile:", error)
    return { success: false, error: "Failed to update profile" }
  }
}

export async function getProfile(userId: string) {
  try {
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    console.error("Error fetching profile:", error)
    return { success: false, error: "Failed to fetch profile" }
  }
}

