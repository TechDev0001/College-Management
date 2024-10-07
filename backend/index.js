const express = require('express');
const app = express();

const path=require("path");

const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const EmployeeRoutes = require('./Routes/EmployeeRoutes');
const { required } = require('joi');
const PORT = process.env.PORT || 1000;

require('./Models/db');
//middleware setup
app.use(cors());
app.use(bodyParser.json());

app.use('/api/employees', EmployeeRoutes);

app.use(express.static(path.resolve(__dirname,"frontend","build")));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})