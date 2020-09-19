import React from 'react'
import NavBar from './Nav'
import '../styles.css'
import Footer from './footer'
import { ToastContainer } from 'react-toastify'


const Base = ({
    title="",
    description="",
    additionalDesc="",
    // className="bg-white text-dark p-4",
    children
}) => {
    return(
        <div>
            <ToastContainer position="bottom-center"/>
            <NavBar />
            <div className="container-fluid px-0">
                <div className="jumbotron bg-Secondary text-dark text-center my-5 my-md-3 py-md-5">
                    <h2 className="display-4 text-dark animate__animated animate__bounceInDown jumbo-title"><strong>{title}</strong></h2>
                    <p className="lead animate__animated animate__slideInLeft">{description}</p>
                    <hr className="py-1"></hr>
                    <p className="animate__animated animate__slideInRight additionaldesc">{additionalDesc}</p>
                </div>
                <div className="container">
                    <div className="my-4">{children}</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Base