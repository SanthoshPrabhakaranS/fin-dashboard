import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const _fileName = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_fileName);
const _filePath = path.join(_dirname, "../data/customers.json");

const readData = () => JSON.parse(fs.readFileSync(_filePath, "utf-8"));
const writeData = (data) =>
  fs.writeFileSync(_filePath, JSON.stringify(data, null, 2));

export const getAllCustomers = async (req, res) => {
  try {
    const customers = readData();
    res.status(200).json(customers);
  } catch (error) {
    console.error("Error reading customers data:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updateCustomer = async (req, res) => {
    try {
      const { id, status } = req.body;
      const customers = readData();
      
      const customerIndex = customers.findIndex(customer => customer.customerId === id);
      
      if (customerIndex === -1) {
        return res.status(404).json({ message: "Customer not found" });
      }
  
      const updatedCustomer = {
        ...customers[customerIndex],
        status,
      };
  
      const updatedCustomers = customers.map(customer => 
        customer.customerId === id ? updatedCustomer : customer
      );
  
      writeData(updatedCustomers);
  
      res.status(200).json({ 
        message: "Customer updated successfully!",
        customer: updatedCustomer
      });
    } catch (error) {
      console.error("Error updating customer:", error);
      res.status(500).json({ 
        message: "Failed to update customer",
        error: error.message 
      });
    }
  };
