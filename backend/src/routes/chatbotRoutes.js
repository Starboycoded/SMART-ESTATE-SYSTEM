// const router = require("express").Router();
// const { queryBot } = require("../controllers/chatbotController");

// router.post("/query", queryBot);

// module.exports = router;
const express = require("express");
const router = express.Router();
const { chatWithAI } = require("../gemini");

router.post("/", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const aiReply = await chatWithAI(userMessage);
    res.json({ reply: aiReply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong with the AI" });
  }
});

module.exports = router;