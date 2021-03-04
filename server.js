const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

const db = require("./config/keys").mongoURI;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/choose-adventure",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const userRouter = require("./routes/User");
app.use("/user", userRouter);

const storySectionRouter = require("./routes/api/storySection");
app.use("/story", storySectionRouter);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
