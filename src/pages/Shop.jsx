import React ,{useState} from 'react'
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container,Col,Row } from 'reactstrap';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList'
import '../styles/shop.css'
const Shop = () => {

  const [productsData,setProductsData] = useState(products)
  const handerFilter= (e) =>{
       const filterValue = e.target.value;
       if(filterValue==='s performance essential tshirt'){
        const filterProducts = products.filter((item)=>item.category==='s performance essential tshirt');
        setProductsData(filterProducts)
       }

       if(filterValue==='s Vest'){
        const filterProducts = products.filter((item)=>item.category==='s Vest');
        setProductsData(filterProducts)
       }

       if(filterValue==='Sweat Shorts'){
        const filterProducts = products.filter((item)=>item.category==='Sweat Shorts');
        setProductsData(filterProducts)
       }

       if(filterValue==='wearex'){
        const filterProducts = products.filter((item)=>item.category==='wearex');
        setProductsData(filterProducts)
       }

       if(filterValue==='Joggers'){
        const filterProducts = products.filter((item)=>item.category==='Joggers');
        setProductsData(filterProducts)
       }
  }

  const handerSearch = e =>{
    const searchTerm = e.target.value;
    const searchProducts = products.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchProducts)
  }
  return (
   <Helmet title='Shop'>
    <CommonSection title='Products'></CommonSection>
    <section>
      <Container>
        <Row>
          <Col lg='3' md='6'>
            <div className="filter__widget">
              <select onClick={handerFilter}>
                <option>Filter By Category</option>
                <option value="Joggers">Joggers</option>
                <option value="s performance essential tshirt">s performance essential tshirt</option>
                <option value="Sweat Shorts">Sweat Shorts</option>
                <option value="s Vest">s Vest</option>
                <option value="wearex">wearex</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='6' className='text-end'>
          <div className="filter__widget">
              <select >
              <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          
          <Col lg='6' md='12'>
            <div className="search__box">
              <input type="text" 
              placeholder='Search...' 
              onChange={handerSearch}/>
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length===0 ? <h1 className='text-center fs-4'>No products are found</h1>
            : <ProductsList data={productsData}></ProductsList>
          }
        </Row>
      </Container>
    </section>
   </Helmet>
  )
}

export default Shop