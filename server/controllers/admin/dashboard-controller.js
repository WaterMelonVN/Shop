const Product = require("../../models/Product");
const Order = require("../../models/Order");
const User = require("../../models/User");

const getDashboardStats = async (req, res) => {
    try {
        const [totalProducts, totalOrders, totalUsers] = await Promise.all([
            Product.countDocuments(),
            Order.countDocuments(),
            User.countDocuments(),
        ]);

        res.status(200).json({
            success: true,
            totalProducts,
            totalOrders,
            totalUsers,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Some error occurred",
        });
    }
};

const getTotalAmountThisMonth = async (req, res) => {
    try {
        const revenueData = await Order.aggregate([
            {
                $project: {
                    month: { $month: "$orderDate" },
                    totalAmount: 1,
                },
            },
            {
                $group: {
                    _id: "$month",
                    totalRevenue: { $sum: "$totalAmount" },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);

        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        const monthsRevenue = new Array(12).fill(0);
        revenueData.forEach((item) => {
            monthsRevenue[item._id - 1] = item.totalRevenue;
        });

        res.status(200).json({
            success: true,
            months: months,
            revenues: monthsRevenue,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error fetching revenue data",
        });
    }
};

module.exports = {
    getDashboardStats,
    getTotalAmountThisMonth,
};
