const { chatWithAI } = require("../../gemini");

exports.queryBot = async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: "No message provided." });
  }

  try {
    const reply = await chatWithAI(userMessage);
    res.json({ reply });
  } catch (err) {
    console.error("Chatbot error:", err);
    res.status(500).json({ reply: "Sorry, I am having trouble responding right now." });
  }
};
