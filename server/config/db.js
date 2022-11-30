const mongoose = require("mongoose");

const CONNECTION_STRING = "mongodb://localhost:27017/Moosic";

module.exports = () => {
     return mongoose.connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      });
  };
  