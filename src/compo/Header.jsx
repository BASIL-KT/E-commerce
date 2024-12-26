import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { search } from '../redux/slices/productSlice';


function Header() {

  const [key,setKey]=useState("")
  const dispatch=useDispatch()

  const searchWithKey=()=>{
    dispatch(search(key))
  }

  const {wishlist}=useSelector((state)=>state.wishReducer)
  const {cart}=useSelector((state=>state.cartReducer))
  return (
    <>
    <Navbar className="bg-light">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-bag-shopping fa-xl" style={{color: "#0a1c66",}} />
          {' '}
            Redux Cart
          </Navbar.Brand>
          <div className='d-flex'>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Search' onChange={(e)=>setKey(e.target.value)} />
              <button className='btn btn-success  me-2 ms-1' onClick={searchWithKey}>Search</button>

            </div>
            <Link to={'/wish'} className='btn btn-outline-dark border me-4 shadow'>
            <i className="fa-solid fa-heart" style={{color: "#ff0505",}} />
            {' '}
            Wishlist
            <span className='badge bg-dark ms-2 rounded-circle'>
            {
wishlist.length
            }
            </span>
            
            </Link>
<Link to={'/cart'} className='btn btn-outline-dark me-4 border shadow'>
<i className="fa-solid fa-cart-shopping" style={{color: "#FFD43B",}} />
{' '}

Cart
<span className='badge bg-dark ms-2 rounded-circle'>
            {
cart.length
            }
            </span>
</Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header