import { useEffect, useState } from "react";
import axios from "axios";

function DashboardStatistical() {
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);

    async function getDashboardStats() {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/admin/dashboard/stats"
            );
            if (response.data.success) {
                setTotalProducts(response.data.totalProducts);
                setTotalOrders(response.data.totalOrders);
                setTotalUsers(response.data.totalUsers);
            }
        } catch (error) {
            console.error("Error fetching dashboard stats:", error);
        }
    }

    useEffect(() => {
        getDashboardStats();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Total Users</h2>
                <p className="text-3xl">{totalUsers - 1}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Total Orders</h2>
                <p className="text-3xl">{totalOrders}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Total Products</h2>
                <p className="text-3xl">{totalProducts}</p>
            </div>
        </div>
    );
}

export default DashboardStatistical;
