// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => console.log("Server running on port 3000"));
