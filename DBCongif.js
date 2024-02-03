const mongoose = require("mongoose");

function initiateDBConnection() {
  mongoose
    .connect("mongodb://localhost:27017/smallshoppee")
    .then((response) => {
      if (response.connections.length > 0) {
        console.log("Database connection successful!");
      }
    })
    .catch((error) => {
      console.error("Error connecting to Database", error);
    });
}

module.exports = {
  initiateDBConnection,
};
