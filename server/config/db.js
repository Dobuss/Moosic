const mongoose = require("mongoose");

const CONNECTION_STRING = "mongodb://localhost:27017/moosic";

module.exports = async (app) => {
  try {
    mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
