import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = 'https://rqgrbkjwfdynnqalpdbn.supabase.co'
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZ3Jia2p3ZmR5bm5xYWxwZGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3OTczODQsImV4cCI6MjA0NzM3MzM4NH0.x_WdOeBSEUUDCKCBk2N9Srdvd51fCjU7osYJklRgO_E'
export const supabase = createClient(supabaseUrl, supabaseKey)