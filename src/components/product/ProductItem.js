import { FiEdit, FiTrash } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "../ui/DeleteModal";

export default function ProductItem({ product }) {
    const [show, setShow] = useState(false);

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
                id={product.id}
                object="product"
            />
            <tr>
                <td style={{ width: "100px" }}>
                    <img width="100%" src={"./images/" + product.img} />
                </td>
                <td>{product.name}</td>
                <td>{toVND(product.price)}</td>
                <td>{product.qty}</td>
                <td>
                    <NavLink to={"edit-product/" + product.id}>
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
