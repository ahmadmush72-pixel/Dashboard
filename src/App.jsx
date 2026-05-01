import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import User from "./pages/User";
import Categories from "./pages/Categories";
import ProductForm from "./components/product/ProductForm";
import ProductEdit from "./components/product/ProductEdit";
import ProductShow from "./components/product/ProductShow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="categories" element={<Categories />} />
        {/* product routes */}
        <Route path="products" element={<Product />} />
        <Route path="products/form" element={<ProductForm />} />
        <Route path="products/edit" element={<ProductEdit />} />
        <Route path="products/show" element={<ProductShow />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
