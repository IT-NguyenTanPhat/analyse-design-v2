import { Button, Card, CardFooter, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "../components/ui/DeleteModal";

export default function OrderDetail() {
    const [show, setShow] = useState(false);

    function toggle() {
        setShow(!show);
    }

    return (
        <>
            <DeleteModal show={show} toggle={toggle} />
            <h2>Order Detail</h2>
            <Card className="p-4 mt-3 shadow">
                <Row>
                    <Col>
                        <h4 className="mb-4">Customer</h4>
                        <p>
                            <strong>Name:</strong>
                        </p>
                        <p>
                            <strong>Phone number:</strong>
                        </p>
                        <p>
                            <strong>Address:</strong>
                        </p>
                        <p>
                            <strong>Time:</strong>
                        </p>
                        <p>
                            <strong>Status:</strong> pending
                        </p>
                    </Col>
                    <Col>
                        <h4 className="mb-4">Product</h4>
                        <div className="d-flex justify-content-between">
                            <div style={{ width: "60px" }}>
                                <img
                                    width="100%"
                                    src="../images/anica-phytextra.webp"
                                />
                            </div>
                            <p>Otto</p>
                            <p>@mdo</p>
                            <p>@mdo</p>
                        </div>
                        <p className="mt-4">
                            <strong>Total:</strong> 166.000đ
                        </p>
                    </Col>
                </Row>
                <CardFooter>
                    <NavLink to={"/order/edit-order" }>
                        <Button color="primary">Edit</Button>{" "}
                    </NavLink>
                    <Button color="danger" style={{ marginRight: "75%" }} onClick={toggle}>
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
