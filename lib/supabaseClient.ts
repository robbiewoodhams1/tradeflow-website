// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zbhzziliujwcwkeyswmq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiaHp6aWxpdWp3Y3drZXlzd21xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNzI3MDQsImV4cCI6MjA2Njk0ODcwNH0.w9FV3VqKGIO2G3FHhvMVacD52P67ZIWDC94CBJdk4gw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
