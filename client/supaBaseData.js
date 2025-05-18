import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supaBaseUrl = process.env.supaBaseUrl;

const supaBaseKey = process.env.supaBaseKey;

const supabase = createClient(supaBaseUrl, supaBaseKey);

export default supabase;
