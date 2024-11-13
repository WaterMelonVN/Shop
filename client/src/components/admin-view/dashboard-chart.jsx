import React, { useEffect, useState } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function DashboardChart({ title }) {
    const [revenueData, setRevenueData] = useState(null);

    useEffect(() => {
        // Fetch the monthly revenue data from the backend
        axios
            .get("http://localhost:5000/api/admin/dashboard/total-month")
            .then((response) => {
                if (response.data.success) {
                    const months = response.data.months;
                    const revenues = response.data.revenues;
                    setRevenueData({
                        labels: months,
                        values: revenues,
                    });
                }
            })
            .catch((error) => {
                console.error("Error fetching revenue data:", error);
            });
    }, []);

    if (!revenueData) {
        return <div>Loading...</div>;
    }

    const options = {
        chart: {
            type: "column",
        },
        title: {
            text: title,
        },
        xAxis: {
            categories: revenueData.labels,
            title: {
                text: "Month",
            },
        },
        yAxis: {
            title: {
                text: "Revenue",
            },
        },
        series: [
            {
                name: "Monthly Revenue",
                data: revenueData.values,
            },
        ],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default DashboardChart;
