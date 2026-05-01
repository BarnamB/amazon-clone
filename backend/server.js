const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const products = [
    { id: 1, name: "Wireless Mouse", price: 20, category: "Accessories" },
    { id: 2, name: "Mechanical Keyboard", price: 50, category: "Accessories" },
    { id: 3, name: "Laptop Stand", price: 15, category: "Accessories" },
    { id: 4, name: "Gaming Monitor", price: 200, category: "Electronics" },
    { id: 5, name: "Smartphone Pro", price: 500, category: "Mobiles" } 
];


app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});