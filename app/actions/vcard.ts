"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"
import type { CardData } from "../dashboard/types"

export async function createVCard(data: CardData) {
  try {
    const { data: vcard, error } = await supabase
      .from("vcards")
      .insert([
        {
          user_id: data.userId, // Use data.userId here
          card_name: data.cardName,
          card_layout: data.cardLayout,
          name: data.name,
          pronouns: data.pronouns,
          job_title: data.jobTitle,
          company: data.company,
          location: data.location,
          bio: data.bio,
          profile_picture: data.profilePicture,
          cover_photo: data.coverPhoto,
          company_logo: data.companyLogo,
          theme: data.theme,
          phone: data.phone,
          email: data.email,
          whatsapp: data.whatsapp,
          linkedin: data.linkedin,
          instagram: data.instagram,
          facebook: data.facebook,
          website: data.website,
          address: data.address,
        },
      ])
      .select()
      .single()

    if (error) throw error

    revalidatePath("/dashboard/edit-vcard")
    return { success: true, data: vcard }
  } catch (error) {
    console.error("Error creating vcard:", error)
    return { success: false, error: "Failed to create vcard" }
  }
}

export async function updateVCard(id: string, data: Partial<CardData>) {
  try {
    const { data: vcard, error } = await supabase.from("vcards").update(data).eq("id", id).select().single()

    if (error) throw error

    revalidatePath("/dashboard/edit-vcard")
    return { success: true, data: vcard }
  } catch (error) {
    console.error("Error updating vcard:", error)
    return { success: false, error: "Failed to update vcard" }
  }
}

export async function deleteVCard(id: string) {
  try {
    const { error } = await supabase.from("vcards").delete().eq("id", id)

    if (error) throw error

    revalidatePath("/dashboard/edit-vcard")
    return { success: true }
  } catch (error) {
    console.error("Error deleting vcard:", error)
    return { success: false, error: "Failed to delete vcard" }
  }
}

export async function getVCards(userId: string) {
  try {
    const { data, error } = await supabase.from("vcards").select("*").eq("user_id", userId)

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    console.error("Error fetching vcards:", error)
    return { success: false, error: "Failed to fetch vcards" }
  }
}

