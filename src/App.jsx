import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/Dashboard";

import Product from "./pages/Product";
import User from "./pages/User";
import Categories from "./pages/Categories";
import ProductForm from "./components/product/crud/ProductForm";
import ProductEdit from "./components/product/crud/ProductEdit";
import ProductShow from "./components/product/crud/ProductShow";
import CategoryForm from "./components/categories/crud/CategoryForm";
import Orders from "./pages/Orders";
import CategoryEdit from "./components/categories/crud/CategoriesEdit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />

        {/* product routes */}
        <Route path="products" element={<Product />} />
        <Route path="products/form" element={<ProductForm />} />
        <Route path="products/edit" element={<ProductEdit />} />
        <Route path="products/show" element={<ProductShow />} />
        {/* Categories */}
        <Route path="categories" element={<Categories />} />
        <Route path="categories/form" element={<CategoryForm />} />
        <Route path="categories/edit" element={<CategoryEdit />} />
        {/* Orders */}
        <Route path="orders" element={<Orders />} />

        <Route path="customers" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
