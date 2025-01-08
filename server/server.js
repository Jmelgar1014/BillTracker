import express from "express";
const app = express();
const port = 8000;

import "dotenv/config";

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Create a single supabase client for interacting with your database
