import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardFooter, Col, Row, Table } from "reactstrap";
import { getOrder } from "../api/api";
import DeleteModal from "../components/ui/DeleteModal";
import Loader from "../components/ui/Loader";
import NoItem from "../components/ui/NoItem";
import useHttp from "../hooks/use-http";

export default function OrderDetail() {
    const [show, setShow] = useState(false);

    function toggle() {
        setShow(!show);
    }

    const param = useParams();
    const navigate = useNavigate();
    // Get student to pass to form
    const { sendRequest, status, data, error } = useHttp(getOrder, true);

    useEffect(() => {
        sendRequest(param.id);
    }, [sendRequest, param.id]);

    if (status === "pending") return <Loader />;
    if (error) return <h1>{error}</h1>;
    if (!data) return <NoItem />;

    function getProducts(data) {
        const res = [];

        for (const key in data) {
            const obj = {
                id: key,
                ...data[key],
            };

            res.push(obj);
        }
        return res;
    }

    const products = getProducts(data.product);

    function toVND(num) {
        return num.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
        });
    }

    const total = () => {
        let res = 0;
        products.map((product) => {
            res += product.price * product.qty;
        });
        return res;
    };

    console.log(total());

    return (
        <>
            <DeleteModal
                show={show}
                toggle={toggle}
                object="order"
                id={data.id}
            />
            <h2>Order Detail</h2>
            <Card className="p-4 mt-3 shadow">
                <Row>
                    <Col md={5}>
                        <h4 className="mb-4">Customer</h4>
                        <p>
                            <strong>Name: </strong>
                            {data.name}
                        </p>
                        <p>
                            <strong>Phone number: </strong>
                            {data.phone}
                        </p>
                        <p>
                            <strong>Address: </strong>
                            {data.address}
                        </p>
                        <p>
                            <strong>Date: </strong>
                            {data.date}
                        </p>
                        <p>
                            <strong>Status: </strong>
                            {data.status}
                        </p>
                    </Col>
                    <Col>
                        <h4>Product</h4>
                        <Table hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item) => (
                                    <tr>
                                        <td className="">{item.name}</td>
                                        <td>{toVND(item.price)}</td>
                                        <td>{item.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <p className="mt-4">
                            <strong>Total: </strong>
                            {toVND(data.total)}
                        </p>
                    </Col>
                </Row>
                <CardFooter className="mt-2">
                    <NavLink to={"/order/edit-order/" + data.id}>
                        <Button color="primary">Edit</Button>{" "}
                    </NavLink>
                    <Button
                        color="danger"
                        style={{ marginRight: "75%" }}
                        onClick={toggle}
                    >
                        Delete
                    </Button>{" "}
                    <NavLink to="/order">
                        <Button>Back</Button>
                    </NavLink>
                </CardFooter>
            </Card>
        </>
    );
}
