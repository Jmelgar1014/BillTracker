import express from "express";
import * as path from "path";
import { fileURLToPath } from "url"; // Import this to resolve ES module paths
const app = express();
const port = process.env.PORT || 8000;

import "dotenv/config";

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
