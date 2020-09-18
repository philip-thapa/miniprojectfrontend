import React from 'react'
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
import PrivateRoute from './auth/helper/PrivateRoutes'
import About from './core/about'
import Cart from './core/Cart'
import Error from './core/error'
import Home from './core/Home'
import SignIn from './user/signin'
import Signup from './user/signup'
import UserDashboard from './user/UserDashboard'


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/user/dashboard" exact component={UserDashboard} />
                <Route path="/about" exact component={About} />
                <PrivateRoute path="/cart" exact component={Cart} />
                <Route path='/404' component={Error} />
                <Redirect from='*' to='/404' />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes