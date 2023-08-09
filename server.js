const express = require("express");
const bodyparser = require("body-parser");
const app = express();


app.use(bodyparser.json());
const path = require("path");




// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });




const port = process.env.PORT || 1704;

app.listen(port, () => {
  console.log("Server started of Wadbros");
});
