require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected");
    app.listen(4000, () => console.log("Server running on port 4000"));
  })
  .catch(err => console.log(err));