const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/product.html"));
});

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
