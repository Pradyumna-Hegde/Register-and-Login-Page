import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";

const app = express();
const PORT = 8000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

// HTTP GET requests.
app.get("/", (req, res) => {
  res.send("My first HTTP GET request");
});

// API routes.
app.use("/api", router);

// Start server when we have valid connection.
connect()
  .then(() => {
    try {
      app.listen(PORT, () =>
        console.log(`Server connected to http://localhost:${PORT}`)
      );
    } catch (error) {
      console.log(`cannot connect to server`);
    }
  })
  .catch((error) => console.log(`Invalid database connection ......`));
