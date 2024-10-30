const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const project = require('./routes/projectRoute');
const port = process.env.PORT || 80;

//please URI env me daal dena
mongoose
  .connect("mongodb+srv://priyanshu88064:9758809708@cluster0.aqv81fc.mongodb.net/pdfeditor?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/project",project);

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});



server.listen(port, () => {
  console.log("Listening on PORT 8000");
});
