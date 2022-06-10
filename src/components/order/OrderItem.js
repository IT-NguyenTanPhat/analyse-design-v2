import { FiEdit, FiTrash } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "../ui/DeleteModal";

export default function OrderItem({ order }) {
    const [show, setShow] = useState(false);
    let statusColor = "green";

    if (order.status === "pending") statusColor = "red";
    else if (order.status === "shipping") statusColor = "orange";

    function toggle() {
        setShow(!show);
    }

    function toVND(num) {
        return num.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
        });
    }

    return (
        <>
            <DeleteModal
                show={show}
                toggle={toggle}
                id={order.id}
                object="order"
            />
            <tr>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{toVND(order.total)}</td>
                <td>{order.date}</td>
                <td style={{ color: statusColor }}>{order.status}</td>
                <td>
                    <NavLink to={"edit-order/" + order.id}>
                        <FiEdit size={22} />
                    </NavLink>
                    <FiTrash
                        onClick={toggle}
                        size={22}
                        style={{ color: "red", marginLeft: "10px" }}
                    />
                </td>
            </tr>
        </>
    );
}
