import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const expressServer = express();

// --- CORS
const corsOptions = {
  origin: "http://localhost:3000",
};
expressServer.use(cors(corsOptions));

// --- REQUEST PARSING
expressServer.use(bodyParser.json());
expressServer.use(bodyParser.urlencoded({ extended: true }));

// --- ROUTES
expressServer.get("/", (req, res) => {
  res.json({ message: "Welcome to my Node server." });
});

// --- START THE SERVER
const PORT = process.env.PORT || 4000;
expressServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
