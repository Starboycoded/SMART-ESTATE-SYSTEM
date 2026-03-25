export const sendMessage = async (message) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chatbot`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
    }),
  });
  return response.json();
};
