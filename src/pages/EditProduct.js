import ProductForm from "../components/product/ProductForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../components/ui/Loader";
import useHttp from "../hooks/use-http";
import NoItem from "../components/ui/NoItem";
import { getDrug, updateDrug } from "../api/api";

export default function EditProduct() {
    const param = useParams();
    const navigate = useNavigate();
    // Get student to pass to form
    const { sendRequest, status, data, error } = useHttp(getDrug, true);

    useEffect(() => {
        sendRequest(param.id);
    }, [sendRequest, param.id]);

    // Update student
    const { sendRequest: request, status: stt } = useHttp(updateDrug);

    useEffect(() => {
        if (stt === "completed") {
            navigate("/product");
        }
    }, [stt, navigate]);

    // Check data after get
    if (status === "pending") return <Loader />;
    if (error) return <h1>{error}</h1>;
    if (!data) return <NoItem />;

    function onEditProduct(obj) {
        request(obj);
    }
    
    return (
        <>
            <ProductForm
                action="edit"
                onEditProduct={onEditProduct}
                product={data}
            />
        </>
    );
}
