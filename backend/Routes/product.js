const authMiddleware = require("../Middlewares/auth");

const router = require("express").Router();

router.get("/", authMiddleware, (req, res) => {
  res.status(200).json([
    {
      name: "test1",
      price: "2000",
    },
    {
      name: "test2",
      price: "2000",
    },
    {
      name: "test3",
      price: "2000",
    },
  ]);
});

module.exports = router;
