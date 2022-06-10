import { Card, CardBody, Col, Row } from "reactstrap";
import { MdDateRange, MdAttachMoney, MdAddShoppingCart } from "react-icons/md";
import Loader from "../components/ui/Loader";
import NoItem from "../components/ui/NoItem";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import { getAllOrders } from "../api/api";

function Home() {
    let newOrder = 0;
    let total = 0;
    let totalMonth = 0;
    const currentMonth = new Date().getMonth()

    const { sendRequest, status, data, error } = useHttp(getAllOrders, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === "pending") return <Loader />;

    if (error) return <h1>{error}</h1>;

    if (status === "completed" && (!data || data.length === 0))
        return <NoItem />;


    data.map((order) => {
        if (order.status === "pending")
            newOrder++;
        total += order.total;
        if (new Date(order.date).getMonth() === currentMonth)
            totalMonth += order.total;
    })

    function toVND(num) {
        return num.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    }

    return (
        <>
            <h2>Dashboard</h2>
            <Row className="mt-4">
                <Col>
                    <Card
                        style={{ borderLeft: "0.25rem solid #4e73df" }}
                        className="shadow"
                    >
                        <CardBody className="d-flex justify-content-between">
                            <div>
                                <p style={{color: "#4e73df"}}>EARNING (MONTHLY)</p>
                                <h5>{toVND(totalMonth)}</h5>
                            </div>
                            <MdDateRange size={60} style={{color: '#ccc'}}/>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{ borderLeft: "0.25rem solid #1cc88a" }}
                        className="shadow"
                    >
                        <CardBody className="d-flex justify-content-between">
                            <div>
                                <p style={{color: "#1cc88a"}}>EARNING (TOTAL)</p>
                                <h5>{toVND(total)}</h5>
                            </div>
                            <MdAttachMoney size={60} style={{color: '#ccc'}}/>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{ borderLeft: "0.25rem solid #f6c23e" }}
                        className="shadow"
                    >
                        <CardBody className="d-flex justify-content-between">
                            <div>
                                <p style={{color: "#f6c23e"}}>NEW ORDER</p>
                                <h5>{newOrder}</h5>
                            </div>
                            <MdAddShoppingCart size={60} style={{color: '#ccc'}}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Home;
