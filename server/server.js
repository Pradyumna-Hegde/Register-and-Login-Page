import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

/** middlewears */
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // less hackers know about our stack

const PORT = 12000;

// HTTP get requests.
app.get("/", (req, res) => {
  res.status(201).json("Home GET request");
});

// start the server.
app.listen(PORT, () => {
  console.log(`Server connected to http://localhost:${PORT}`);
});
