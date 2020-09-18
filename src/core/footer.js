import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles.css'


const Footer = () => {
    const [showIcon, setShowIcon] = useState('')

    const hideIconMethod = () => {
        setShowIcon(true)
    }
    return(

        <div>


        <footer className=" bg-secondary text-white">
            <div className="container py-2">
                <h1 className="text-center py-3 follow">Our locations</h1>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div style={{display: "inline"}} id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "100%"}}>
                             <Link to="">
                                <iframe className="border rounded" src="https://maps.google.com/maps?q=himyathsagar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
                                 style={{border: "0"}} allowFullScreen></iframe>
                             </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <div className="col-12 col-md-6 offset-md-2">
                                <h5>Hyderabad</h5>
                                <p>Himayath sagar, near Moinabad</p>
                                <i className="fa fa-phone-square" aria-hidden="true"> <em>8107665567</em></i>
                            </div>
                            <div className="col-12 col-md-4">
                                <h5>Delhi</h5>
                                <p>Bishanpura, near Noida</p>
                                <i className="fa fa-phone-square" aria-hidden="true"> <em>6303004987</em></i>
                            </div>
                        </div>
                         
                     </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        </footer>

        <footer className="bg-dark text-white">
            <div className="container bg-dark pb-3">
                <h3 className="text-center p-2 follow">Follow us on</h3>
                <hr className="text-secondary"></hr>
                <div className="d-flex flex-column flex-md-row justify-content-around ">
                    <div className="p-2">
                        <a href="https://www.facebook.com/philip.thapa.961" target="_blank"><button className="btn btn-outline-info"><i className="fab fa-facebook"> Like us</i></button></a>
                    </div>
                    <div className="p-2">
                        <Link to="https://www.instagram.com/pzp_404/"target="_blank"><button className="btn btn-outline-info"><i className="fab fa-instagram-square">  Follow us</i></button></Link>
                    </div>
                    <div className="p-2">
                        <Link to="https://www.linkedin.com/in/philip-thapa-444595195/" target="_blank"><button className="btn btn-outline-info"><i className="fab fa-linkedin">  Join us</i></button></Link>
                             </div>
                    <div className="p-2">
                        <Link to="#"target="_blank"><button className="btn btn-outline-info"><i className="fab fa-twitter-square">  Follow us</i></button></Link>
                     </div>
                </div>
            </div>
            <div className="mt-2 mb-0 text-center crossIcon bg-dark p-2" style={{display: !showIcon ? "" : "none"}}>
                 By using our site, you acknowledge that you have read and understand our <u>Cookie Policy</u>, <u>Privacy Policy</u>, and our <u>Terms of Service</u>. <i className="fa fa-times " aria-hidden="true" onClick={hideIconMethod}></i>
             </div>
            </footer>
        </div>
    )
};

export default Footer