"use server"

import { supabase } from "../../lib/supabase"
import { revalidatePath } from "next/cache"

export async function uploadFile(userId: string, file: File) {
  try {
    const fileName = `${Date.now()}-${file.name}`
    const { data, error } = await supabase.storage.from("shared-files").upload(`${userId}/${fileName}`, file)

    if (error) throw error

    const { data: fileData, error: fileError } = await supabase
      .from("shared_files")
      .insert([
        {
          user_id: userId,
          file_name: fileName,
          file_size: file.size,
          file_type: file.type,
          storage_path: data.path,
        },
      ])
      .select()
      .single()

    if (fileError) throw fileError

    revalidatePath("/dashboard/file-sharing")
    return { success: true, data: fileData }
  } catch (error) {
    console.error("Error uploading file:", error)
    return { success: false, error: "Failed to upload file" }
  }
}

export async function deleteFile(userId: string, fileId: string) {
  try {
    const { data: fileData, error: fetchError } = await supabase
      .from("shared_files")
      .select("storage_path")
      .eq("id", fileId)
      .single()

    if (fetchError) throw fetchError

    const { error: deleteStorageError } = await supabase.storage.from("shared-files").remove([fileData.storage_path])

    if (deleteStorageError) throw deleteStorageError

    const { error: deleteDbError } = await supabase.from("shared_files").delete().eq("id", fileId)

    if (deleteDbError) throw deleteDbError

    revalidatePath("/dashboard/file-sharing")
    return { success: true }
  } catch (error) {
    console.error("Error deleting file:", error)
    return { success: false, error: "Failed to delete file" }
  }
}

export async function getSharedFiles(userId: string) {
  try {
    const { data, error } = await supabase.from("shared_files").select("*").eq("user_id", userId)

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    console.error("Error fetching shared files:", error)
    return { success: false, error: "Failed to fetch shared files" }
  }
}

