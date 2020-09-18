import React,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { signup } from '../auth/helper'
import Base from '../core/Base'
import '../styles.css'

const Signup = () => {

    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false
    })

    const {name, email, password, error, success} = values

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    };

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
        event.preventDefault();
        setValues({...values, error:false})
        signup({name, email, password})
        .then(data=>{
            console.log(data)
            if(data.email === email){
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    password: "",
                    success: true,
                    error: ""
                })
            }else{
                setValues({
                    ...values,
                    error: true,
                    success: false
                })
            }
        })
        .catch(error=>console.log(error))
    }

    // const signUpForm = () => {
    //     return(
    //         <div className="row align-items-center" style={{height: "80vh"}}>
    //             <div className="col-md-6 offset-sm-3 text-left">
    //                 <form>
    //                     <div className="form-group">
    //                         <label className="text-dark">Name</label>
    //                         <input 
    //                         type="text"
    //                         className="form-control"
    //                         value={name}
    //                         onChange={handleChange("name")}
    //                         />
    //                     </div>
    //                     <div className="form-group">
    //                         <label className="text-dark">Email</label>
    //                         <input 
    //                         type="email"
    //                         className="form-control"
    //                         value={email}
    //                         onChange={handleChange("email")}
    //                         />
    //                     </div>
    //                     <div className="form-group">
    //                         <label className="text-dark">Password</label>
    //                         <input 
    //                         type="password"
    //                         className="form-control"
    //                         value={password}
    //                         onChange={handleChange("password")}
    //                         />
    //                     </div>
    //                     <button onClick={onSubmit} className="btn btn-outline-success btn-block">Submit</button>
    //                 </form>
    //             </div>
    //         </div>
    //     )
    // }

    const signUpForm = () => {
        return(
            <div className="container my-sm-5" style={{height: "auto"}}>
                 <div className="myCard">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="myLeftCtn"> 
                                <form className="myForm text-center">
                                    <header>Create new account</header>
                                    <div className="form-group">
                                        <i className="fas fa-user"></i>
                                        <input className="myInput" type="text" placeholder="Username" id="username"  value={name} onChange={handleChange("name")} required /> 
                                    </div>

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
                        <p className="quotes">“Dress like you’ve made something of yourself, even if you haven’t”</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }

    return(
        <Base title="SignUp Page" description="A basic page for signup" additionalDesc="If you’re asking someone for money wear a tie">
            {errorMessage()}
            {successMessage()}
            {signUpForm()}
        </Base>
    )
}

export default Signup