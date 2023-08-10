const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());
const path = require("path");

let dbconnection = require("./auth");

const AdminRoute = require("./routes/adminRoutes");
const ProductRoute = require("./routes/productRoutes");
const EnquiryRoute = require("./routes/enquireRoute");

app.use("/api/admin/", AdminRoute);
app.use("/api/product/", ProductRoute);
app.use("/api/enquiry/", EnquiryRoute);

// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

const port = process.env.PORT || 1704;

app.listen(port, () => {
  console.log("Server started of Wadbros");
});
