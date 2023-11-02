const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");
// const profilRoute = require("./profil.route");
// const accountRoute = require("./account.route");
// const transactionRoute = require("./transaction.route");
const morgan = require("morgan");

router.use(morgan("dev"));

router.use("/api/v1/users", userRoute);

module.exports = router;
