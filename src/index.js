import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/TopMenu';
import Products from '../pages/Products';
import {CartProvider} from '../src/contexts/Cart'

const Index = () => <h2>Home</h2>;

const Product = () => <h2>Product</h2>;

function App() {
  return ( 
    <CartProvider>
    <Router>

    <TopMenu />

    <Route path="/" exact component={Index} />
    <Route path="/products" exact component={Products} />
    </Router>
    </CartProvider>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
