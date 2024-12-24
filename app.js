var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const { default: mongoose } = require("mongoose");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);

const port = 4300;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose
  .connect("mongodb+srv://venkataratnammandangi123:ysFozJZob5aieyJF@cluster0.nr2jz.mongodb.net/bank", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error in connecting to database");
    console.log(err);
  });

module.exports = app;
