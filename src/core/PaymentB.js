import DropIn from 'braintree-web-drop-in-react'
import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import { isAuthenticated, signout } from '../auth/helper'
import { emptyCart } from './helper/cartHelper'
import { createOrder } from './helper/orderHelper'
import { getMeToken, processPayment } from './helper/PaymentHelper'


const PaymentB = ({
    products,
    reload = undefined,
    setReload = f => f,
}) => {

    const [info, setInfo] = useState({
        loading: true,
        sucess: true,
        error: "",
        clientToken: null,
        instance: {},
    })

    const userId = isAuthenticated && isAuthenticated().user.id
    const token = isAuthenticated && isAuthenticated().token

    const getToken = (userId, token) => {
        getMeToken(userId, token)
        .then(info=>{
            if(info.error){
                setInfo({
                    ...info,
                    sucess: false,
                    error: info.error
                })
                signout(()=>{
                    return <Redirect to="/" />
                })
            } else {
                const clientToken = info.clientToken
                // setInfo({clientToken: clientToken})
                setInfo({clientToken})
            }
        })
    };

    useEffect(()=>{
        getToken(userId, token)
    }, []);

    const getAmount = () => {
        let amount = 0;
        products.map((prod)=>{
            amount += parseInt(prod.price);
        })
        return amount;
    };

    const onPurchase = () => {
        setInfo({loading: true})
        let nonce;
        let getNonce = info.instance.requestPaymentMethod()
        .then(data=>{
            nonce = data.nonce
            const paymentData = {
                paymentMethodNonce: nonce,
                amount: getAmount()
            };
            processPayment(userId, token, paymentData)
            .then(response=>{
                if(response.error){
                    if(response.code == '1'){
                        console.log("Payment Failed")
                        toast("Payment failed", {type: "error"})
                        signout(()=>{
                            return <Redirect to="/" />
                        })
                    }
                } else {
                    setInfo({
                        ...info,
                        sucess: response.sucess,
                        loading: false
                    })
                    console.log("Payment Success")
                    let product_names = ""
                    products.forEach((item)=>{
                        product_names += item.name + ","
                    });
                    const orderData = {
                        products: product_names,
                        transaction_id: response.transaction.id,
                        amount: response.transaction.amount
                    }
                    createOrder(userId, token, orderData)
                    .then(response => {
                        if(response.error){
                            if(response.code == "1"){
                                console.log("Order failed")
                                toast("Order failed", {type: "error"})
                            }
                            signout(()=>{
                                return <Redirect to="/" />
                            })
                        }else{
                            if(response.success == true){
                                console.log("Order Placed")
                                toast("Order placed sucessfully", {type: "success"})
                                
                            }
                        }
                    })
                    .catch(error=>{
                        setInfo({
                            loading: false,
                            success: false
                        })
                        console.log("ORDER FAILED ", error)
                        toast("Order failed", {type: "error"})
                    })
                    emptyCart(()=>{
                        console.log("Cart emptied out")
                    })

                    setReload(!reload)
                }
            })
            .catch(error=>console.log(error))
        })
        .catch(error=>{
            toast("Fill the accurate information and try again", {type: "error"})
            console.log("NONCE: ", error)})
    }

    const showbtnDropIn = () => {
        return(
            <div>
                
                {
                    info.clientToken !== null && products.length > 0 ? 
                    (
                        <div>
                            
                            <DropIn
                            options={{ authorization: info.clientToken}}
                            onInstance={instance => (info.instance = instance)}
                            >
                            </DropIn>
                            <button onClick={onPurchase} className="btn btn-block btn-outline-info">Buy</button>
                        </div>
                    ) 
                    : 
                    (
                        <h3>Please add something in cart</h3>
                    )
                }
            </div>
        )
    }

    return(
        <div>
            <h3 className="my-4">Your total bill is Rs: <span className="text-info">{getAmount()}</span></h3>
            {showbtnDropIn()}
        </div>
    )
};

export default PaymentB