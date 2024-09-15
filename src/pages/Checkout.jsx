import React from 'react'
import { Container,Row,Col, FormGroup,Form } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';

import { useSelector } from 'react-redux';
const Checkout = () => {

  const totalQty= useSelector(state=>state.cart.totalQuantity);
  const totalAmount = useSelector(state=>state.cart.totalAmount);
  return <Helmet title='Checkout'>
    <CommonSection title='Checkout'></CommonSection>
      <section>
        <Container>
        <Row>
        <Col lg='8'>
          <h6 className="mb-4 fw-bold">Billing infomation</h6>
          <Form className='billing__form'>
            <FormGroup  className='form__group'>
              <input type='text' placeholder='Enter your name'></input>
            </FormGroup>
            <FormGroup  className='form__group'>
              <input type='email' placeholder='Enter your email'></input>
            </FormGroup>
            <FormGroup  className='form__group'>
              <input type='number' placeholder='Phone Number'></input>
            </FormGroup>
            <FormGroup  className='form__group'>
              <input type='text' placeholder='Stress Address'></input>
            </FormGroup>
            <FormGroup  className='form__group'>
              <input type='text' placeholder='City'></input>
            </FormGroup>
            <FormGroup  className='form__group'>
              <input type='text' placeholder='Postal Code'></input>
            </FormGroup>
            <FormGroup  className='form__group'>
              <input type='text' placeholder='Country'></input>
            </FormGroup>
          </Form>
        </Col>
        <Col lg='4'>
          <div className="checkout__cart">
            <h6>Total Qty:<span>{totalQty} items</span></h6>
            <h6>Subtotal:<span>${totalAmount}</span></h6>
            <h6>Shipping:
              <br></br>free shipping<span>$0</span></h6>
            <h4>Total Cost:<span>${totalAmount}</span></h4>
            <button className="buy__btn auth__btn w-100">
              Place an order</button>
          </div>
        </Col>
      </Row>
        </Container>
      </section>
  </Helmet>
}

export default Checkout