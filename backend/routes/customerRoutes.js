import express from "express";
import { getAllCustomers, updateCustomer } from "../controllers/customerController.js";

const router = express.Router();

router.get("/", getAllCustomers);
router.post("/update", updateCustomer)

export default router;
