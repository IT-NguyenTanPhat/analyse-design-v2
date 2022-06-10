import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteDrug, deleteOrder } from "../../api/api";
import useHttp from "../../hooks/use-http";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function DeleteModal({ show, toggle, object, id }) {
    const { sendRequest, status } = useHttp(deleteDrug);
    const { sendRequest: sr, status: st } = useHttp(deleteOrder);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === "completed" || st === "completed") {
            if (object === "product") navigate("/product-done");
            else navigate("/order-done");
        }
    }, [status, navigate, st]);

    function onHandleDelete(id) {
        toggle();
        if (object === "product") sendRequest(id);
        else sr(id);
    }

    return (
        <>
            <Modal scrollable toggle={toggle} isOpen={show} close>
                <ModalHeader>Delete</ModalHeader>
                <ModalBody>Do you want to delete?</ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => onHandleDelete(id)}>
                        Delete
                    </Button>{" "}
                    <Button onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
