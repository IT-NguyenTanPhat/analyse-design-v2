import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Loader from "../components/ui/Loader";
import NoItem from "../components/ui/NoItem";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import { getAllOrders } from "../api/api";

export default function Report() {
    const { sendRequest, status, data, error } = useHttp(getAllOrders, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === "pending") return <Loader />;

    if (error) return <h1>{error}</h1>;

    if (status === "completed" && (!data || data.length === 0))
        return <NoItem />;

    function handleData(data) {
        const res = new Array(12).fill(0);

        data.map((order) => {
            const month = new Date(order.date).getMonth()
            res[month] += order.total;
        })
        return res;
    }

    const res = {
        labels: [
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
        ],
        datasets: [
            {
                label: "Total Income",
                data: handleData(data),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
            },
        ],
    };

    return (
        <>
            <h2>Reporting</h2>
            <div className="shadow border rounded p-3 mt-4">
                <Line data={res} />
            </div>
        </>
    );
}
