require("dotenv").config(); // Load environment variables

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const routes = require("./routes");

// Use routes
app.use("/api/chat", routes.chatRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
