import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

export default function OrderItem({ order }) {
    let statusColor = "green";

    if (order.status === "pending") statusColor = "red";
    else if (order.status === "shipping") statusColor = "orange";

    function toVND(num) {
        return num.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
        });
    }

    return (
        <>
            <tr>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{toVND(order.total)}</td>
                <td>{order.date}</td>
                <td style={{ color: statusColor }}>{order.status}</td>
                <td>
                    <NavLink to={"order-detail/" + order.id}>
                        <Button color="primary">Detail</Button>
                    </NavLink>
                </td>
            </tr>
        </>
    );
}
