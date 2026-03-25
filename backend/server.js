require('dotenv').config(); 
const app = require("./src/app");

// 1. Define the port, prioritizing the environment variable
const PORT = process.env.PORT || 5000;

// 2. Define routes BEFORE starting the server
app.get("/test", (req, res) => {
    res.json({ message: "Backend is running and connected!" });
});

// 3. Start listening on the dynamically assigned port
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});

console.log("DB HOST:", process.env.DB_HOST);
