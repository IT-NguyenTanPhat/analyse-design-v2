import ProductForm from "../components/product/ProductForm";
import { addDrug } from "../api/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/use-http"

export default function NewProduct() {
    const { sendRequest, status } = useHttp(addDrug);
    const navigate = useNavigate();

    const product = {
        name: "",
        price: "",
        qty: "",
    };

    useEffect(() => {
        if (status === "completed") {
            navigate("/product");
        }
    }, [status, navigate]);

    function onAddProduct(productObj) {
        sendRequest(productObj);
    }

    return (
        <>
            <h2>New Product</h2>
            <ProductForm
                action="add"
                product={product}
                onAddProduct={onAddProduct}
            />
        </>
    );
}
