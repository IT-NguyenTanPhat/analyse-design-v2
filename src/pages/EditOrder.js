import OrderForm from "../components/order/OrderForm";
import { getOrder, updateOrder} from "../api/api";
import useHttp from "../hooks/use-http";
import NoItem from "../components/ui/NoItem";
import Loader from "../components/ui/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditOrder() {
    const param = useParams();
    const navigate = useNavigate();
    // Get student to pass to form
    const { sendRequest, status, data, error } = useHttp(getOrder, true);

    useEffect(() => {
        sendRequest(param.id);
    }, [sendRequest, param.id]);

    // Update student
    const { sendRequest: request, status: stt } = useHttp(updateOrder);

    useEffect(() => {
        if (stt === "completed") {
            navigate("/order");
        }
    }, [stt, navigate]);

    // Check data after get
    if (status === "pending") return <Loader />;
    if (error) return <h1>{error}</h1>;
    if (!data) return <NoItem />;

    function onEditOrder(obj) {
        request(obj);
    }

    return (
        <>
            <OrderForm order={data} onEditOrder={onEditOrder}/>
        </>
    );
}
