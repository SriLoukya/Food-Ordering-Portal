const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tutorial"

// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");
var RegisterRouter = require("./routes/register");
var LoginRouter = require("./routes/login");
var FoodRouter = require("./routes/Food");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // Connection to MongoDB
//mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true });
mongoose.connect('mongodb+srv://loukya:loukya@cluster0.wz2xa.mongodb.net/Loki?retryWrites=true&w=majority', {    useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// // setup API endpoints
 app.use("/testAPI", testAPIRouter);
 app.use("/user", UserRouter);
 app.use("/register", RegisterRouter);
 app.use("/login", LoginRouter);
 app.use("/food", FoodRouter);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
