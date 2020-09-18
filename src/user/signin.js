import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '../auth/helper'
import Base from '../core/Base'


const SignIn = () => {

    const [values, setValues] = useState({
        name: "",
        email: "test1@miniproject.com",
        password: "123456",
        success: false,
        error: "",
        loading: false,
        didRedirect: false
    })

    const {name, email, password, success, error, loading, didRedirect} = values

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const successMessage = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3 text-left">
                    <div className="alert alert-success"
                    style={{display: success? " " : "none"}}
                    >
                        New account created. Please <Link to="/signin">login now</Link>
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3 text-left">
                    <div className="alert alert-warning"
                    style={{display: error? " " : "none"}}
                    >
                        Check all the fields again...
                    </div>
                </div>
            </div>
        )
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({
            ...values,
            error: false,
            loading: true
        })
        // const user = {email, password}
        signin({email, password})
        .then(data=>{
            console.log("DATA: ", data)
            if(data.token){
                authenticate(data,()=>{
                    console.log("Token Added");
                    setValues({
                        ...values,
                        didRedirect: true,
                    })
                })
            }else{
                setValues({
                    ...values,
                    loading: false
                })
            }
        })
        .catch(error=>console.log(error))
    };

    const performRedirect = () => {
        if(isAuthenticated()){
            return <Redirect to="/" />
        }
    };

    const loadingMessage = () => {
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>Loading....</h2>
                </div>
            )
        )
    }

    const signInForm = () => {
        return(

            <div className="container my-sm-5" style={{height: "auto"}}>
                 <div className="myCard">
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="myLeftCtn"> 
                                <form className="myForm text-center">
                                    <header>Login</header>

                                    <div className="form-group">
                                        <i className="fas fa-envelope"></i>
                                        <input className="myInput" placeholder="Email" type="text" id="email" value={email} onChange={handleChange("email")} required /> 
                                    </div>

                                    <div className="form-group">
                                        <i className="fas fa-lock"></i>
                                        <input className="myInput" type="password" id="password" placeholder="Password" value={password} onChange={handleChange("password")} required /> 
                                    </div>
                                    <input type="submit" className="butt" onClick={onSubmit} /> 
                                </form>
                            </div>
                        </div> 
                    <div className="col-md-6">
                    <div className="myRightCtn">
                    <div className="box">
                        <h6 className="quotes">“Clothes and manners do not make the man; but when he is made, they greatly improve his appearance.”</h6>
                    </div>
                                
                    </div>
                </div>
            </div>
        </div>
        </div>

        )
    }



    return(
        <Base title="Sign In" description="Welcome to the signin page" additionalDesc="Being perfectly well-dressed gives one a tranquillity that no religion can bestow">
            {loadingMessage()}
            {signInForm()}
            {performRedirect()}
        </Base>
    )
}

export default SignIn