const db = require("../config/db");

exports.getAllUsers = async (req, res) => {
  try {
    const [results] = await db.query(
      "SELECT id, name, email, phone, role FROM users"
    );
    res.json(results);
  } catch (err) {
    console.error("Get users error:", err);
    res.status(500).json({ message: "Failed to fetch users", error: err.message });
  }
};
