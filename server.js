const express = require("express");
const connectDB = require("./config/db");
const fileUpload = require("express-fileupload");
const app = express();

// Init middleware - accept body data with requests
app.use(express.json({ extended: false }));
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// Connect to DB
connectDB();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Blitz App" });
});

// Init file Upload

app.use(fileUpload());

// Define routes to api end points

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/upload", require("./routes/upload"));

app.listen(PORT, () => console.log(`App started at port ${PORT}`));
