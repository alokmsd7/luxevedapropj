import React ,{useState}from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {db,storage} from '../firebase-config'
import {getDownloadURL, ref,uploadBytesResumable} from 'firebase/storage'
import {collection,addDoc} from 'firebase/firestore'
import { async } from '@firebase/util';


const AddProducts = () => {
  const [enterTitle,setEnterTitle] = useState('')
  const [enterShortDesc,setEnterShortDesc] = useState('')
  const [enterDescription,setEnterDescription] = useState('')
  const [enterCategory,setEnterCategory] = useState('')
  const [enterPrice,setEnterPrice] = useState('')
  const [enterProductImg,setEnterProductImg] = useState(null)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const addProduct = async(e) =>{
    e.preventDefault()
    setLoading(true)

    const product  = {
      title:enterTitle,
      shortDesc:enterShortDesc,
      description:enterDescription,
      price:enterPrice,
      imgUrl:enterProductImg
    };
    
   
    try{

      const docRef = await collection(db,'products')
      const storageRef = ref(storage,`productImages/${Date.now()+enterPrice}`)
      const uploadTask = uploadBytesResumable(storageRef,enterProductImg)
      uploadTask.on(()=>{
        toast.error('Images not uploaded')
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
          await addDoc(docRef,{
            productName:enterTitle,
            shortDesc:enterShortDesc,
            description:enterDescription,
            price:enterPrice,
            category:enterCategory,
            imgUrl:downloadURL,
          })
        })
        setLoading(false)
        toast.success('Product successfullly added!')
        navigate('/dashboard/all-products')
        
      })
    } catch(error){
      setLoading(false)
      toast.error('Product not added')
    }
  
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h4>Add Product</h4>
            {
              loading ? <h4 className='py-5'>Loading...</h4> : <>
              <Form onSubmit={addProduct}>
              <FormGroup className='form__group'>
                <span>Product title</span>
                <input type='text' placeholder='Double sofa' 
                value={enterTitle} onChange={e=>setEnterTitle(e.target.value)}
                required></input>
              </FormGroup>

              <FormGroup className='form__group'>
                <span>Short Description</span>
                <input type='text' placeholder='lorem............'
                value={enterShortDesc} onChange={e=>setEnterShortDesc(e.target.value)}
                required></input>
              </FormGroup>
              
              <FormGroup className='form__group'>
                <span>Descriptions</span>
                <input type='text' placeholder='Descriptions...........'
                value={enterDescription} onChange={e=>setEnterDescription(e.target.value)}
                required></input>
              </FormGroup>
            
            <div className='d-flex align-items-center justify-content-between gap-5'>
            <FormGroup className='form__group w-50'>
                <span>Price</span>
                <input type='number' placeholder='$100'
                value={enterPrice} onChange={e=>setEnterPrice(e.target.value)} 
                required></input>
              </FormGroup>

              <FormGroup className='form__group w-50'>
                <span>Category</span>
                <select className='w-100 p-2' value={enterCategory} onChange={e=>setEnterCategory(e.target.value)}
                required>
                <option>Select Category</option>
                <option value='Joggers'>Joggers</option>
                <option value='s performance essential tshirt'>s performance essential tshirt</option>
                <option value='s Vest'>s Vest</option>
                <option value='Sweat Shorts'>Sweat Shorts</option>
                <option value='wearex'>wearex</option>
                </select> 
              </FormGroup>
            </div>

            <div>
            <FormGroup className='form__group'>
                <span>Product Image</span>
                <input type='file' onChange={e=>setEnterProductImg(e.target.files[0])}
                required></input>
              </FormGroup>
            </div>
            <button className="buy__btn" type='submit'>Add Product</button>
            </Form>
              </>
            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts