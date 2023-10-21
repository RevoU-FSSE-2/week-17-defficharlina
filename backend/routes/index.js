const { Router } = require("express");
const bookRoutes = require("./bookRoutes");
const authRoutes = require("./authRoutes");
const dashboardRoutes = require("./dashboardRoutes");
//const preventAttackController = require("./preventAttackRoutes")

const router = Router();

router.use("/", dashboardRoutes);
router.use("/api/v1/auth", authRoutes);
//router.use("/api/v1/attack", preventAttackController);
router.use("/api/v1/books", bookRoutes);

module.exports = router;
