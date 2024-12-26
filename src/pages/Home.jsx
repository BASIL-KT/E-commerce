import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetcproductThunk } from '../redux/slices/productSlice'
import { addzToWishList } from '../redux/slices/wishSilce';
import { addtoCart } from '../redux/slices/cartSlice';
import { prevPage, nextPage } from '../redux/slices/productSlice';
function Home() {

    const dispatch = useDispatch()


    const { product, loading, error, productPerPage, currentPage } = useSelector((state) => state.productReducer)

    const totalPages = product.length / productPerPage
    const lastProductIndex = productPerPage * currentPage
    const firstProductIndex = lastProductIndex - productPerPage
    const visibleProducts = product.slice(firstProductIndex, lastProductIndex)

    useEffect(() => {
        dispatch(fetcproductThunk())
    }, [])

    const next = () => {
        if (currentPage < totalPages) {
            dispatch(nextPage())
        }
    }

    const prev = () => {
        if (currentPage > 1) {
            dispatch(prevPage())
        }
    }

    console.log(product)
    return (
        <>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompage template</p>
                    </div>
                </div>
            </header>

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {
                            loading ?
                                <h2>loading...</h2>
                                :
                                <>
                                    {
                                        error ?
                                            <h2>{error}</h2>
                                            :
                                            <>
                                                {

                                                    visibleProducts?.map(item => (
                                                        <div className="col mb-5">
                                                            <div className="card h-100">
                                                                <Link to={`/view/${item?.id}`}>
                                                                    <img className="card-img-top" src={item?.thumbnail} alt="..." />
                                                                </Link>
                                                                <div className="card-body p-4">
                                                                    <div className="text-center">

                                                                        <h5 className="fw-bolder">{item?.title}</h5>

                                                                        ${item?.price}
                                                                    </div>
                                                                </div>
                                                                <div className='card-footer d-flex justify-content-between'>
                                                                    <button className='btn border shadow border-light' onClick={() => dispatch(addzToWishList(item))}>
                                                                        <i className="fa-solid fa-heart-circle-plus" style={{ color: "#fe0606", }} />
                                                                    </button>
                                                                    <button className='btn border shadow border-light' onClick={() => dispatch(addtoCart(item))}>
                                                                        <i className="fa-solid fa-cart-plus" style={{ color: "#FFD43B", }} />

                                                                    </button>

                                                                </div>
                                                            </div>
                                                        </div>


                                                    ))
                                                }

                                            </>
                                    }

                                </>


                        }
                    </div>
                </div>
            </section>
            <div className='text-center'>
                <button className='btn border' onClick={prev}>
                    <i className="fa-solid fa-angle-left" />
                </button>
                {' '}
                {currentPage}/{totalPages}
                {' '}
                <button className='btn border' onClick={next}>
                    <i className="fa-solid fa-angle-right" />

                </button>
            </div>
        </>
    )
}


export default Home