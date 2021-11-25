const mongoose = require("mongoose");

const URI = "mongodb+srv://admin:123321@cluster0.gwqo8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

exports.connect = () => {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connected");
    })
    .catch((error: any) => {
      console.log("db connection failed");
      console.error(error);
      process.exit(1);
    });
};
