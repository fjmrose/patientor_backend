import express from "express";
import diagnosesRouter from "./routes/diagnoses";
import patientsRouter from "./routes/patients";
const app = express();
// import cors from "cors";

app.use(express.json());
// app.use(cors);

const PORT = 3001;

app.get("/", (req, res) => {
  console.log();
  res.send({ message: "hello world" });
});

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
