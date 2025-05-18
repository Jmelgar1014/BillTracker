import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

console.log(process.env.test);
console.log(process.env.supaBaseKey);

const supaBaseUrl = process.env.supaBaseUrl;

const supaBaseKey = process.env.supaBaseKey;

const supabase = createClient(supaBaseUrl, supaBaseKey);

export default supabase;
