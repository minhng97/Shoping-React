import React, { Component } from "react";
import axios from 'axios';

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Spinner,
  Alert
} from "reactstrap";
import {CartContext} from '../src/contexts/Cart'

  const URL = 'https://umhdy.sse.codesandbox.io/products';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      spinner: true
    };
  }

async componentDidMount() {
  try {
    var products = await axios.get(URL);
    products = products.data;

     setInterval(() => this.setState({
      products: products,
      spinner: false
    }), 1000)}  
  catch(error) {
      console.error(error)
      this.setState({
        products: null,
        spinner: false
      })
    }
  }
  render() {
    let { products, spinner } = this.state;
    let loading;
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          { spinner === true ?  (
             [<Spinner className="m-3" type="grow" color="success" style={{ width: '3rem', height: '3rem' }} />, <p className="h6 mt-4">Please wait...</p>]
          ) : ( loading ) } 
          {!products ? (<Alert color="secondary">No product found</Alert>) 
          : products.map(product => (
            <Col sm="3">
              <Card>
                <CardImg src={product.imageUrl} />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <CartContext.Consumer>
                    { ({addToCart}) => 
                    <Button onClick={ () => addToCart(product) }>
                      Add to cart
                    </Button> 
                    }
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
            ))
           }
       
        </Row>
      </Container>
    );
  }
}
export default Products;
