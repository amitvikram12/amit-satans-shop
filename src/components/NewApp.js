import {BrowserRouter, Route, Redirect, Switch, Router} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Navbar from './Navbar';
import PageNotFound from './PageNotFound';
import Login from './Login';
import Cart from './Cart';
import Forgot from './Forgot';
import Checkout from './Checkout';
import Admin from './Admin';
import AddCake from './AddCake';
import CakeDetails from './CakeDetails';
import Search from './Search';
import PlaceOrder from './PlaceOrder';
import Orders from './Orders';
import { connect } from 'react-redux';
import history from '../reduxstore/history';
import Profile from './Profile';
function NewApp(props) {
    //const [isLoggedIn, setIsLoggedIn] = useState(localStorage.token?true:false);
    return (
        <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        {!props.isLoggedIn ? <Redirect to="/login"/>: <Home/>}
                    </Route>
                    <Route exact path="/signup" component={Signup}></Route>
                    <Route exact path="/login">
                        {props.isLoggedIn ? <Redirect to="/"/> : <Login/>}
                    </Route>
                    <Route exact path="/checkout">
                        {!props.isLoggedIn ? <Redirect to="/login"/> : <Checkout/>}
                    </Route>
                    <Route exact path="/admin">
                        {!props.isLoggedIn ? <Redirect to="/login"/> : <Admin/>}
                    </Route>
                    <Route exact path="/addcake">
                        {!props.isLoggedIn ? <Redirect to="/login"/> : <AddCake/>}
                    </Route>
                    <Route exact path="/search">
                        {!props.isLoggedIn ? <Redirect to="/login"/>: <Search/>}
                    </Route>
                    {/* <Route exact path="/cakedetails/:id">
                        {!props.isLoggedIn ? <Redirect to="/login"/> : <CakeDetails/>}
                    </Route> */}
                    <Route exact path="/cakedetails/:id" component={CakeDetails}/>
                    <Route exact path="/cart">
                        {!props.isLoggedIn ? <Redirect to="/login"/> : <Cart/>}
                    </Route>
                    <Route exact path="/placeorder">
                    {!props.isLoggedIn ? <Redirect to="/login"/> : <PlaceOrder/>}
                    </Route>
                    <Route exact path="/orders">
                    {!props.isLoggedIn ? <Redirect to="/login"/> : <Orders/>}
                    </Route>
                    <Route exact path="/profile">
                    {!props.isLoggedIn ? <Redirect to="/login"/> : <Profile/>}
                    </Route>
                    <Route exact path="/forgot" component={Forgot}></Route>
                    <Route exact path="/*" component={PageNotFound}></Route>
                </Switch>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn:state.login.isLoggedIn,
    }
}

export default connect(mapStateToProps)(NewApp);