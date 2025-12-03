require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
console.log("console")
// Test Route
app.get("/", (req, res) => {
  res.send("API working");
});
app.get("/clg",(req,res)=>{
  res.send(

    "parask bhosidke"
  )
 
})


// MongoDB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error: ", err));

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
