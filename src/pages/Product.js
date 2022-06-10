import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { getAllDrugs } from "../api/api";
import ProductItem from "../components/product/ProductItem";
import Loader from "../components/ui/Loader";
import NoItem from "../components/ui/NoItem";
import useHttp from "../hooks/use-http";

export default function Product() {
    // Load data
    const { sendRequest, status, data, error } = useHttp(getAllDrugs, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === "pending") return <Loader />;

    if (error) return <h1>{error}</h1>;

    if (status === "completed" && (!data || data.length === 0))
        return (
            <>
                <NavLink to="new-product">
                    <Button>Add product</Button>
                </NavLink>
                <NoItem />
            </>
        );

    return (
        <>
            <h2>Product</h2>
            <NavLink to="new-product" className="mt-2">
                <Button>Add product</Button>
            </NavLink>
            <div className="shadow border rounded p-3 mt-4">
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <ProductItem key={item.id} product={item} />
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
