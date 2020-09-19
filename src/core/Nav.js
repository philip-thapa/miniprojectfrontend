import React, {Fragment} from 'react'
import {Link, withRouter} from "react-router-dom"
import { isAuthenticated, signout } from '../auth/helper'
import '../styles.css'
import logo from '../logo3.png'

const currentTab = (history, path) => {
    if(history.location.pathname == path){
        return {color: "#d9e08b"}
    }else{
        return {color: "#ffffff"}
    }
}

const NavBar = ({history, path}) => {
    return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navBackgroundClassChanger">
                <div className="container">
                <Link className="navbar-brand" to="#">
                    <img src={logo} width="140" height="40" className="d-inline-block align-top animate__animated animate__pulse" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse animate__animated animate__flipInX" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link style={currentTab(history, "/")} to="/" className="nav-link nav-custom-class">Home <span className="sr-only">(current)</span></Link>
                        </li>

                        {
                            isAuthenticated() && (
                                <li className="nav-item">
                                    <Link style={currentTab(history, "/cart")} className="nav-link nav-custom-class" to="/cart">Cart</Link>
                                </li>
                            )
                        }
                        
                        
                        <li className="nav-item">
                            <Link style={currentTab(history, "/user/dashboard")} className="nav-link nav-custom-class" to="/user/dashboard">Dashboard</Link>
                        </li>

                        <li className="nav-item">
                            <Link style={currentTab(history, "/about")} className="nav-link nav-custom-class" to="/about">About</Link>
                        </li>

                        {
                            !isAuthenticated() && (
                                <Fragment>
                                    <li className="nav-item">
                                        <Link style={currentTab(history, "/signup")} className="nav-link nav-custom-class" to="/signup">Signup</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={currentTab(history, "/signin")} className="nav-link nav-custom-class" to="/signin">Signin</Link>
                                    </li>
                                </Fragment>
                            )
                        }

                        {
                            isAuthenticated() && (
                                <li className="nav-item nav-custom-class">
                                    <span
                                    onClick={()=>{
                                        signout(()=>{
                                            history.push("/")
                                        });
                                    }} className="nav-link text-warning"
                                    >
                                        Signout
                                    </span>
                                </li>
                            )
                        }
                    </ul>
   
                 </div>
                 </div>
            </nav>
        )
}

export default withRouter(NavBar)



