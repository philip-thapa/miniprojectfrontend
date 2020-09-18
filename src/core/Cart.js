import React, {useState, useEffect} from 'react'
import Base from './Base'
import Card from './Card'
import { loadCart } from './helper/cartHelper'
import PaymentB from './PaymentB'


const Cart = () => {

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(()=>{
        setProducts(loadCart())
    }, [reload])

    const loadAllProducts = (products) => {
        return(
            <div>
                {products.map((product, index)=>{
                    return(
                        <Card 
                         key={index}
                         product={product}
                         addToCart={false}
                         removeFromCart={true}
                         reload={reload}
                         setReload={setReload}
                        />
                    )
                })}
            </div>
        )
    }

    const loadCheckout = () => {
        return(
            <div>
                <h1>checkout</h1>
            </div>
        )
    }

    return(
         <Base title="My Cart" description="Welcome to checkout" additionalDesc="Fashion is what you adopt when you don’t know who you are">
             <div className="row text-center">
                 <div className="col-12 col-md-6">
                     {loadAllProducts(products)}
                 </div>
                 <div className="col-12 col-md-6">
                     {products.length > 0 ? 
                     (
                         <PaymentB products={products} reload={reload} setReload={setReload}/>
                     ) :
                      (
                          <h2 className="text-secondary">Please add something in cart</h2>
                      )}
                 </div>
             </div>
        </Base>
    )
}

export default Cart