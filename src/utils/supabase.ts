import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://ddbaprzkkiqxhnqpfcbc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkYmFwcnpra2lxeGhucXBmY2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MjM3MjgsImV4cCI6MjAxNTE5OTcyOH0.RHI92wZn1c-DnZtM_NnRMDfDVFvlEo6i_sKLpOJpSuk'
)

export default supabase