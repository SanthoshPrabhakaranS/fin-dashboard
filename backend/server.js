import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import customerRoute from "./routes/customerRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
dotenv.config();
app.use(express.json());

app.use("/api/customers", customerRoute);

app.listen(PORT, () => {
  console.log(`SERVER STARTED IN ${PORT}`);
});
