const router = require("express").Router();
const path = require("path");
const Item = require("../../models/Item");
const Type = require("../../models/Type");

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/login.html"));
});

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/signup.html"));
});

router.get("/", (req, res) => {
  Item.findAll()
    .then((response) => {
      const products = response.map((post) => post.get({ plain: true }));
      res.render("dashboard", { products });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/product/:id", (req, res) => {
  let productId = req.params.id;

  if (productId == undefined) {
    res.render("error");
    return;
  }

  Item.findAll({
    where: {
      id: productId,
    },
  })
    .then((response) => {
      const products = response.map((post) => post.get({ plain: true }));
      let product = products[0];
      if (product == undefined) {
        res.render("error");
        return;
      }
      res.render("product", { product });
    })
    .catch((err) => {
      console.log(err);
      res.render("error");
    });
});

router.get("/product/", (req, res) => {
  res.render("product", { product: {} });
});

module.exports = router;
