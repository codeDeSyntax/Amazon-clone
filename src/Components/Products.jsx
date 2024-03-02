import  { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
// import { FaStar } from 'react-icons/fa';

const Products = () => {
    const[products , setProducts] = useState(['we' , 'items']);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            setProducts(response.data)
        }).catch((error) => Response.json({error , message:'something went wrong'}))
    })
  return (
    <section className=' w-full flex justify-center items-center'>
        <div className='grid grid-cols-2 gap-3  justify-center items-center '>
           {
            products.map((product) => {
                return (
                    <div key={product.id} className='flex flex-col h-60 w-40 shadow-xl border p-2 gap-1'>
                        <img src={product.image} alt="" className='size-20 ' />
                        <div className='w-full h-12'>
                        <p className='text-[.7rem]'>{product.title.trim().slice(0 , 30)}
                        </p>
                        </div>
                        <del>20% off</del>
                        <p>Ghc <span className='font-bold text-[#141B24]'> {product.price}</span></p>

                        {/* <div>{<FaStar/> * Math.floor(product.rating.rate)}</div> */}
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-[#FF9900]' />
                            <FaStar className='text-[#FF9900]'/>
                            <FaStar className='text-[#FF9900]'/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        
                    </div>
                )
            })
            
           }
        </div>
    </section>
  )
}

export default Products