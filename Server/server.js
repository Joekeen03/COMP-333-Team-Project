const express = require("express");
const cors = require("cors");
//require("dotenv").config();
const app = express();
const port = 5000;
const p = (s) => console.log(s);
const mongoose = require("mongoose");
const path = require("path")
const URI = "mongodb+srv://Lemond:crc0IFRmiYK1j93r@cluster0.6elut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => p("db connected"))
  .catch((err) => p(err));

const employeesRouter = require("./routes/employees");

app.use("/employees", employeesRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

//if(process.env.NODE_ENV === "production") {
//  app.use(express.static('../build'))
//}

app.listen(port, () => p(`server started on ${port}`));