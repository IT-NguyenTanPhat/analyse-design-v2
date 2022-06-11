import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Report from "./pages/Report";
import NewProduct from "./pages/NewProduct";
import NotFound from "./pages/NotFound";
import EditProduct from "./pages/EditProduct";
import OrderDetail from "./pages/OrderDetail";
import EditOrder from "./pages/EditOrder";

function App() {
    return (
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />

                <Route exact path="/order" element={<Order />} />
                <Route
                    path="/order/order-detail/:id"
                    element={<OrderDetail />}
                />
                <Route path="/order/edit-order/:id" element={<EditOrder />} />
                <Route
                    path="/order-done"
                    element={<Navigate replace to="/order" />}
                />

                <Route exact path="/product" element={<Product />} />
                <Route path="/product/new-product" element={<NewProduct />} />
                <Route
                    path="/product/edit-product/:id"
                    element={<EditProduct />}
                />
                <Route
                    path="/product-done"
                    element={<Navigate replace to="/product" />}
                />

                <Route path="/report" element={<Report />} />
            </Routes>
        </Layout>
    );
}

export default App;
