const dotenv = require("dotenv");
const mongoose = require("mongoose");

//I used the config file to hide sensitive information
dotenv.config({ path: "./config.env" });
const app = require("./app");

//run this command on desktop to use local host: "brew services start mongodb-community"
// process.env.LOCAL_HOST;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

console.log(DB);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
