import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import { addItemToCart, removeItemFromCart } from './helper/cartHelper'
import ImageHelper from './helper/imageHelper'
import {isAuthenticated} from '../auth/helper'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Card = ({
    product,
    addToCart = true,
    removeFromCart = false,
    reload = undefined,
    setReload = f => f,
}) => {

    const [redirect, setRedirect] = useState(false)

    const productTitle = product ? product.name : 'Default Name'
    const productDecription = product ? product.description : 'Default description'
    const produtPrice = product ? product.price : "Default price"


    const addToCartMethod = () => {
        if(isAuthenticated()){
            console.log("Addded to cart")
            addItemToCart(product,()=>setRedirect(true))
        }else{
            return toast("Please signin to buy the products", {type: "warning"})
        }
    };


    const getARedirect = redirect => {
        if(redirect){
            return <Redirect to='/cart' />
        }
    };

    const showAddToCart = addToCart => {
        return(
            addToCart && (
                    <button 
                        onClick={addToCartMethod}
                        className="btn btn-block btn-outline-info my-1">
                            Add to cart
                    </button>
            )
        )
    }

    const showRemoveFromCart = removeFromCart => {
        return(
            removeFromCart && (
                    <button 
                        onClick={()=>{
                            removeItemFromCart(product.id)
                            setReload(!reload)
                            toast("Item removed from the cart", {type: "info"})
                            console.log("product removed from cart")
                        }}
                        className="btn btn-block btn-outline-danger my-1">
                            Remove from Cart
                    </button>
            )
        )
    }

    return(

        <div className="card text-dark bg-white border border-secondary">
            
            <div className="card-body">
                {getARedirect(redirect)}
                <ImageHelper product={product}/>
                <div className="card-header text-center">{productTitle}</div>
                <p className="text-dark text-center font-weight-normal text-wrap">
                    {productDecription}
                </p>
                <p className="text-left">Rs: {produtPrice}</p>
                <div className="row">
                    <div className="col-12">
                        {showAddToCart(addToCart)}
                    </div>
                    <div className="col-12">
                        {showRemoveFromCart(removeFromCart)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card