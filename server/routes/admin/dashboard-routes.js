const express = require("express");

const {
    getDashboardStats,
    getTotalAmountThisMonth,
} = require("../../controllers/admin/dashboard-controller");

const router = express.Router();

router.get("/stats", getDashboardStats);
router.get("/total-month", getTotalAmountThisMonth);

module.exports = router;
