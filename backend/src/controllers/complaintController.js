const db = require("../config/db");

exports.lodgeComplaint = async (req, res) => {
  const { userId, title, description } = req.body;
  if (!userId || !title || !description) {
    return res.status(400).json({ message: "Missing fields" });
  }
  try {
    const [result] = await db.query(
      "INSERT INTO complaints (user_id, title, description, status) VALUES (?, ?, ?, 'open')",
      [userId, title, description]
    );
    res.json({ message: "Complaint lodged successfully", id: result.insertId });
  } catch (err) {
    console.error("Lodge complaint error:", err);
    res.status(500).json({ message: "Failed to lodge complaint", error: err.message });
  }
};

exports.getAllComplaints = async (req, res) => {
  try {
    const [results] = await db.query(
      `SELECT c.*, u.name as user_name 
       FROM complaints c 
       JOIN users u ON c.user_id = u.id 
       ORDER BY c.date DESC`
    );
    res.json(results);
  } catch (err) {
    console.error("Get complaints error:", err);
    res.status(500).json({ message: "Failed to fetch complaints", error: err.message });
  }
};

exports.getUserComplaints = async (req, res) => {
  const { userId } = req.params;
  try {
    const [results] = await db.query(
      "SELECT * FROM complaints WHERE user_id = ? ORDER BY date DESC",
      [userId]
    );
    res.json(results);
  } catch (err) {
    console.error("Get user complaints error:", err);
    res.status(500).json({ message: "Failed to fetch complaints", error: err.message });
  }
};

exports.updateComplaintStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await db.query(
      "UPDATE complaints SET status = ? WHERE id = ?",
      [status, id]
    );
    res.json({ message: "Complaint updated" });
  } catch (err) {
    console.error("Update complaint error:", err);
    res.status(500).json({ message: "Failed to update complaint", error: err.message });
  }
};
