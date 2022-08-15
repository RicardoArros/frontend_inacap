import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { FormGroup, Input, Label, Table } from "reactstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import BannerHome from "../../assets/img/banner-hero3.jpeg";

const initialInputState = {
  code: 0,
  productName: "",
  description: "",
  price: 0,
  amount: 0,
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productValues, setProductValues] = useState(initialInputState);

  const { code, productName, description, price, amount } = productValues;

  //console.log(typeof productValues);
  //console.log(code, productName);

  const handleInputChange = (e) => {
    setProductValues({ ...productValues, [e.target.name]: e.target.value });
  };

  const updateProductsArray = (productValues) => {
    setProducts([...products, productValues]);
  };

  const handleFormSubmit = (e) => {
    console.log(productValues);

    updateProductsArray(productValues);

    console.log(products);
  };

  //
  const RenderTableData = (props) => {
    const { products } = props;

    let count = 0;

    return Object.keys(products).map((i, o) => {
      const { code, productName, description, price, amount } = products[i];

      count = count + 1;

      return (
        <tr key={count.toString(10)}>
          <th scope="row">{count.toString(10)}</th>
          <td>{code}</td>
          <td>{productName}</td>
          <td>{description}</td>
          <td>{price}</td>
          <td>{amount}</td>
        </tr>
      );
    });
  };

  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <h1>Bienvenido a Maryposaenti</h1>
          <img src={BannerHome} className="w-50" />
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Ingresar Productos</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Label for="code">Código producto</Label>
              <Input
                name="code"
                placeholder="código"
                onChange={handleInputChange}
                value={code}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="productName">Nombre producto</Label>
              <Input
                name="productName"
                placeholder="nombre"
                onChange={handleInputChange}
                value={productName}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="description">Descripción producto</Label>
              <Input
                id="description"
                name="description"
                type="textarea"
                onChange={handleInputChange}
                value={description}
              />
            </FormGroup>

            <FormGroup>
              <Label for="price">Precio</Label>
              <Input
                id="price"
                name="price"
                type="number"
                onChange={handleInputChange}
                value={price}
              />
            </FormGroup>

            <FormGroup>
              <Label for="amount">Cantidad</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                onChange={handleInputChange}
                value={amount}
              />
            </FormGroup>

            <Button onClick={handleFormSubmit}>Registrar producto</Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table hover>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>

            <tbody>
              <RenderTableData products={products} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
