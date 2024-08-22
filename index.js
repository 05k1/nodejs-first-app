const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const connectDB = require("./database");
connectDB();

const productRouter = require("./modules/product/product.router");
const categoryRouter = require("./modules/category/category.router");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", productRouter);
app.use("/", categoryRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
