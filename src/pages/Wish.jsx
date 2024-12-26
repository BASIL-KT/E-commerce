import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromWishList } from '../redux/slices/wishSilce'
import { addtoCart } from '../redux/slices/cartSlice'

function Wish() {
  const {wishlist}=useSelector((state)=>state.wishReducer)
  
  const dispatch=useDispatch()

const handleAddToCart=(product)=>{
   dispatch(addtoCart(product))
   dispatch(removeFromWishList(product.id))

}

  return (
    <>
    <div className='container-fluid'>
    <h3 className='text-info mt-2 ms-3'>Wishlist</h3>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mt-3">
                    
                    {
                      wishlist.length>0?
                      <>
                      {
                        wishlist.map(item=>(
                          <div className="col mb-5">
                        
                        <div className="card h-100">
<Link to={`/view/${item?.id}`}>             
                            <img className="card-img-top" src={item?.thumbnail} alt="..." />
                            </Link>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{item?.title}</h5>
                                 $ {item.price}
                                </div>
                            </div>
                            <div className='card-footer d-flex justify-content-between'>
                                        <button className='btn border shadow border-light' onClick={()=>dispatch(removeFromWishList(item?.id))}>
                                        <i className="fa-solid fa-heart-circle-plus" style={{color: "#fe0606",}} />
                                        </button>
                                        <button className='btn border shadow border-light' onClick={()=>dispatch(handleAddToCart(item))}>
                                        <i className="fa-solid fa-cart-plus" style={{color: "#FFD43B",}} />

                                        </button>

                                       </div>
                        </div>
                    </div>



                        ))
                      }
                      </>
                      :
                      <h3>No Items Added Yet!</h3>
                    }
                    
                    </div>
                    </div>
    </>
  )
}

export default Wish