const express =require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(express.json());

// db connect
connectDB();

app.get("/", (req,res) =>{
    res.send("Welcome to User Management API");
});

// routes
app.use("/users", require ("./routes/userRoutes"));


const PORT = process.env.PORT  || 3600;
app.listen(PORT , () =>
    console.log(`Server running on port ${PORT}`));