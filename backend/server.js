// require('dotenv').config();
// const app = require("./src/app");


// app.listen(5000, () => {
//   console.log("Backend running on http://localhost:5000");
//   app.get("/test", (req, res) => {
//   res.json({ message: "Backend is running and connected!" });
// });

// });
// server.js
require('dotenv').config(); // Load .env variables

const app = require("./src/app");

// Optional: Add a quick test route here if you want
app.get("/test", (req, res) => {
  res.json({ message: "Backend is running and connected!" });
});

// Start the server
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});