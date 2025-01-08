import { createClient } from "@supabase/supabase-js";
const supaBaseUrl = "https://eypcfuerwkprmxglvxyr.supabase.co";

const supaBaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5cGNmdWVyd2twcm14Z2x2eHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MDM0MDEsImV4cCI6MjA0OTk3OTQwMX0.zmE613jDERWczKF6UYlbG_z3RdGxzk1Px-OM-UXpcuo";

const supabase = createClient(supaBaseUrl, supaBaseKey);

export default supabase;
