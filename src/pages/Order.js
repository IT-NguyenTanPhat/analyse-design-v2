import { useEffect } from "react";
import { Table } from "reactstrap";
import { getAllOrders } from "../api/api";
import OrderItem from "../components/order/OrderItem";
import Loader from "../components/ui/Loader";
import NoItem from "../components/ui/NoItem";
import useHttp from "../hooks/use-http";

export default function Order() {
    const { sendRequest, status, data, error } = useHttp(getAllOrders, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === "pending") return <Loader />;

    if (error) return <h1>{error}</h1>;

    if (status === "completed" && (!data || data.length === 0))
        return <NoItem />;

    return (
        <>
            <h2>Order</h2>
            <div className="shadow border rounded p-3 mt-4">
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Customer name</th>
                            <th>Phone number</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((order) => (
                            <OrderItem key={order.id} order={order} />
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
