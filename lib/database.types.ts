export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          storage_used: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          storage_used?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          storage_used?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      vcards: {
        Row: {
          id: string
          user_id: string
          card_name: string
          card_layout: string | null
          name: string | null
          pronouns: string | null
          job_title: string | null
          company: string | null
          location: string | null
          bio: string | null
          profile_picture: string | null
          cover_photo: string | null
          company_logo: string | null
          theme: string | null
          phone: string | null
          email: string | null
          whatsapp: string | null
          linkedin: string | null
          instagram: string | null
          facebook: string | null
          website: string | null
          address: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          card_name: string
          card_layout?: string | null
          name?: string | null
          pronouns?: string | null
          job_title?: string | null
          company?: string | null
          location?: string | null
          bio?: string | null
          profile_picture?: string | null
          cover_photo?: string | null
          company_logo?: string | null
          theme?: string | null
          phone?: string | null
          email?: string | null
          whatsapp?: string | null
          linkedin?: string | null
          instagram?: string | null
          facebook?: string | null
          website?: string | null
          address?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          card_name?: string
          card_layout?: string | null
          name?: string | null
          pronouns?: string | null
          job_title?: string | null
          company?: string | null
          location?: string | null
          bio?: string | null
          profile_picture?: string | null
          cover_photo?: string | null
          company_logo?: string | null
          theme?: string | null
          phone?: string | null
          email?: string | null
          whatsapp?: string | null
          linkedin?: string | null
          instagram?: string | null
          facebook?: string | null
          website?: string | null
          address?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "vcards_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      shared_files: {
        Row: {
          id: string
          user_id: string
          file_name: string
          file_size: number
          file_type: string
          storage_path: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          file_name: string
          file_size: number
          file_type: string
          storage_path: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          file_name?: string
          file_size?: number
          file_type?: string
          storage_path?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shared_files_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

