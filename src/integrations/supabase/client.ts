// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kznfldwmwvzexbqxerzc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6bmZsZHdtd3Z6ZXhicXhlcnpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNjg4MzksImV4cCI6MjA1MTc0NDgzOX0.aYmaK2oi9XqHdAqIK2dfqLccAikx6aSDSqKSPE8RLLA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);