import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function OrderForm(props) {
    const [state, setState] = useState({
        id: props.order.id,
        name: props.order.name,
        phone: props.order.phone,
        address: props.order.address,
        date: props.order.date,
        status: props.order.status,
    });

    function handleChange(e) {
        setState({ id: state.id, [e.target.name]: e.target.value });
    }

    function onHandleSubmit(e) {
        e.preventDefault();

        const nameInput = document.getElementById("name").value;
        const phoneInput = document.getElementById("phone").value;
        const addressInput = document.getElementById("address").value;
        const dateInput = document.getElementById("date").value;
        const statusInput = document.getElementById("status").value;

        const order = {
            id: state.id,
            name: nameInput,
            phone: phoneInput,
            address: addressInput,
            date: dateInput,
            status: statusInput,
        };

        if (
            order.name === "" ||
            order.phone === "" ||
            order.date === "" ||
            order.address === "" ||
            order.status === ""
        ) {
            alert("Please enter your information");
            return;
        }

        props.onEditOrder(order);
    }

    return (
        <>
            <Form
                className="border rounded p-3 shadow mt-4"
                onSubmit={onHandleSubmit}
            >
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={state.name}
                        onChange={(e) => handleChange(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone number</Label>
                    <Input
                        id="phone"
                        name="phone"
                        placeholder="Phone number"
                        value={state.phone}
                        onChange={(e) => handleChange(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                        id="address"
                        name="address"
                        placeholder="Address"
                        value={state.address}
                        onChange={(e) => handleChange(e)}
                    />
                </FormGroup>
                <div className="d-flex">
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input
                            id="date"
                            name="date"
                            placeholder="Date"
                            value={state.date}
                            type="date"
                            onChange={(e) => handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup className="mx-3">
                        <Label for="status">Status</Label>
                        <Input
                            id="status"
                            name="status"
                            type="select"
                            value={state.status}
                            onChange={(e) => handleChange(e)}
                        >
                            <option style={{ color: "red" }}>pending</option>
                            <option style={{ color: "orange" }}>
                                shipping
                            </option>
                            <option style={{ color: "green" }}>done</option>
                        </Input>
                    </FormGroup>
                </div>
                <Button color="primary">Save</Button>{" "}
                <NavLink to="/order">
                    <Button>Cancel</Button>
                </NavLink>
            </Form>
        </>
    );
}
