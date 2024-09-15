import React ,{useState,useEffect}from 'react';

import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero-img.png';
import { Container,Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import '../styles/home.css'
import Services from '../services/Services';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock'

import useGetData from '../custom-hooks/useGetData'
const Home = () => {
  const [trendingProducts,setTrendingProducts]= useState([]);
  const [bestSalesProducts,setbestSalesProducts]= useState([]);
  const [mobileProducts,setMobileProducts]= useState([]);
  const [wirelessProducts,setWirelessProducts]= useState([]);
  const [popularProducts,setPopularProducts]= useState([]);
  const year = new Date().getFullYear();

  const loading=false

  useEffect(()=>{
    const filterTrendingProducts = products.filter(item=>
      item.category ==='Sweat Shorts');
    
    const filterBestSalesProducts = products.filter(item=>
        item.category ==='Joggers');

    const filterMobileProducts = products.filter(item=>
          item.category ==='s Vest');
        
    const filterWirelessProducts = products.filter(item=>
            item.category ==='wearex');

    const filterPopularProducts = products.filter(item=>
              item.category ==='s performance essential tshirt');

      setTrendingProducts(filterTrendingProducts);
      setbestSalesProducts(filterBestSalesProducts);
      setMobileProducts(filterMobileProducts);
      setWirelessProducts(filterWirelessProducts);
      setPopularProducts(filterPopularProducts)
  },[products]);
  return (
    <Helmet title={'Home'}>
    <section className='hero__section'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="hero__content">
            <p className="hero__subtitle">Trending product in {year}</p>
            <h2>Make Your Interior More Min & Modern</h2>
            <p>Welcome Hello Baby</p>
            <motion.button whileTap={{scale:1.2}} className="buy__btn" ><Link to='/shop'>SHOP NOW</Link></motion.button>
          </div>
        </Col>

        <Col lg='6' md='6'>
          <div className="hero__img">
             <img src={heroImg} alt=''></img>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
   <Services></Services>


   <section className="trending__products">
    <Container>
      <Row>
        <Col lg='12' className='text-center'>
          <h2 className="section__title">Trending Products</h2>
        </Col>

        {
          loading ? <h5 className='fw-bold'>Loading..</h5> :
          <ProductsList data={trendingProducts}/>

        }
      </Row>
    </Container>
   </section>

   <section className="best__sales">
    <Container>
      <Row>
        <Col lg='12' className='text-center'>
          <h2 className="section__title">Best Sales</h2>
        </Col>

        {
          loading ? <h5 className='fw-bold'>Loading..</h5> :
          <ProductsList data={bestSalesProducts}/>

        }
      </Row>
    </Container>
   </section>

   <section className="timer__count">
    <Container>
      <Row>
        <Col lg='6' md='12' className='count__down-col'>
          <div className="clock__top-content">
            <h4 className='text-white fs-6 mb-2'>Limited</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Arm</h3>
          </div>
          <Clock></Clock>
          <motion.button whileTap={{scale:1.2}}className="buy__btn store__tbn">Visit store</motion.button>
        </Col>
        <Col lg='6' md='12' className='text-end counter__img'>
          <img src={counterImg} alt=''></img>
        </Col>
      </Row>
    </Container>
   </section>

   <section className="new__arrivals">
    <Container>
      <Row>
        <Col lg='12' className='text-center md-5'>
          <h2 className="section__title">New Arrivals</h2>
        </Col>

        {
          loading ? <h5 className='fw-bold'>Loading..</h5> :
          <ProductsList data={mobileProducts}/>

        }

     {
          loading ? <h5 className='fw-bold'>Loading..</h5> :
          <ProductsList data={wirelessProducts}/>

        }
      </Row>
    </Container>
   </section>


   <section className="popular__category">
   <Container>
      <Row>
        <Col lg='12' className='text-center md-5'>
          <h2 className="section__title">Popular in Category</h2>
        </Col>
        {
          loading ? <h5 className='fw-bold'>Loading..</h5> :
          <ProductsList data={popularProducts}/>

        }
      </Row>
    </Container>
   </section>
    </Helmet>
  )
}

export default Home