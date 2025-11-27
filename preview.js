import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const basePath = "/deploy-github-pages-main";
const distDir = path.join(__dirname, "out", "deploy-github-pages-main");

console.log("Serving static export from:", distDir);
console.log("BasePath:", basePath);

// Serve static files at basePath
app.use(basePath, express.static(distDir));

// Redirect root → basePath
app.get("/", (req, res) => {
  res.redirect(basePath);
});

// Route for the basePath itself
app.get(basePath, (req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

// Catch-all for any path under basePath using regex
app.get(new RegExp(`^${basePath}(/.*)?$`), (req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log(
    `Preview server running at http://localhost:${port}${basePath}`
  );
});
