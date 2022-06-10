import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function ProductForm(props) {
    const [state, setState] = useState({
        id: props.product.id,
        name: props.product.name,
        price: props.product.price,
        qty: props.product.qty,
    });

    function handleChange(e) {
        setState({ id: state.id, [e.target.name]: e.target.value });
    }

    function onHandleSubmit(e) {
        e.preventDefault();

        const nameInput = document.getElementById("name").value;
        const priceInput = parseInt(document.getElementById("price").value);
        const qtyInput = document.getElementById("qty").value;

        const product = {
            id: state.id,
            name: nameInput,
            price: priceInput,
            qty: qtyInput,
        };

        if (product.name === "" || product.price === "" || product.qty === "") {
            alert("Please enter your information");
            return;
        }

        if (props.action === "add") props.onAddProduct(product);
        else if (props.action === "edit") props.onEditProduct(product);
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
                <div className="d-flex">
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            min="0"
                            placeholder="Price"
                            value={state.price}
                            onChange={(e) => handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup className="mx-3">
                        <Label for="qty">Quantity</Label>
                        <Input
                            id="qty"
                            name="qty"
                            placeholder="Quantity"
                            type="number"
                            min="1"
                            value={state.qty}
                            onChange={(e) => handleChange(e)}
                        />
                    </FormGroup>
                </div>
                <FormGroup>
                    <Label for="file">File</Label>
                    <Input id="file" name="file" type="file" accept="image/*" />
                </FormGroup>
                <Button color="primary">Save</Button>{" "}
                <NavLink to="/product">
                    <Button>Cancel</Button>
                </NavLink>
            </Form>
        </>
    );
}
