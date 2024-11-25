const express = require("express");
const router = express.Router();
const axios = require("axios");

// Define user routes
router.post("/", async (req, res) => {
  const { modelName, newTokens, sysPrompt, text, userMessage } = req.body;

  try {
    // // Set headers for streaming
    // res.setHeader("Content-Type", "text/plain; charset=utf-8");
    // res.setHeader("Transfer-Encoding", "chunked");
    // res.setHeader("Cache-Control", "no-cache");
    // res.setHeader("Connection", "keep-alive");

    // // Make a POST request to the Chat API
    // const apiResponse = await axios.post(
    //   "https://api.saptiva.com/hack",
    //   {
    //     modelName,
    //     newTokens,
    //     sysPrompt,
    //     text,
    //     userMessage,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer hackathonR0Tn-VLzrRwjfQ!K!?AG!DMzoBjmj6Z0RHg-?BQcAfN?9rW-brJJ!L2t79JbTo8-FQXFnd4M4Q?0OCNZi!xtcaYrOubtRMJ8GG3D/OnTNKLf1pqnQIIyMt8VzTeP!BgQ3KpcZKMNZ?6eHJmzz0sDxVZ=J0f=x3vyHPj4vdF2JclC8l9xjq78tZH6RzArB1KE7=CsX9LcAEmLyfqrdHakm==B-4Jez7?YQNay2AXe5NbhThcqWpGcfND`,
    //       "Content-Type": "application/json",
    //     },
    //     responseType: "stream", // Enable streaming response
    //   }
    // );

    // // Stream the response data chunk by chunk
    // apiResponse.data.on("data", (chunk) => {
    //   res.write(chunk); // Send each chunk to the client
    // });

    // // End the stream when the API finishes sending data
    // apiResponse.data.on("end", () => {
    //   res.end();
    // });

    const response = await axios.post(
      "https://api.saptiva.com/hack",
      {
        modelName,
        newTokens,
        sysPrompt,
        text,
        userMessage,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SAPTIVA_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Return the response data to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error communicating with Chat API:", error.message);
    res.status(500).send("Error processing request");
  }
});

module.exports = router;
