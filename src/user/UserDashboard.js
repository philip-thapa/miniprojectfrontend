import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import sorry from '../sorry.gif'


const UserDashboard = () => {
    
    return(
        <Base title="Dashboard" description="Welcome to user dashboard" additionalDesc="‘Fashion is a form of ugliness so intolerable that we have to alter it every six months'">
            <ToastContainer position="bottom-center" />
            {
                isAuthenticated() ? 
                (
                    <div className="bg-dark text-light p-4 border rounded" style={{height: "50vh"}}>
                        <div className="p-4 dashboard">
                            <h3>Hello Dear, How are you? Hope you are enjoing the session...</h3>     
                            <h2>Your cart is waiting for you, checkout and enjoy our products</h2>                      
                        </div>
                        
                    </div>
                ) : 
                (   
                    <div className="container">
                        <div className="d-flex flex-column align-items-center">
                            <div className="">
                                <img src={sorry} alt=""/>
                            </div>
                            <div className=" bg-secondary my-4">
                                <h3 className="text-warning oops">OOopss... you are not logged in, please sign in to see your Dashboard</h3>
                            </div>
                            
                        </div>
                    </div>
                )
            }
        </Base>
    )
}

export default UserDashboard