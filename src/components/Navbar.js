import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import {FaCartPlus, FaSearch} from 'react-icons/fa';

function Navbar(props) {
    const passThrough = false
    const login = true;
    const history = useHistory();
    const location = useLocation();
    const [searchedText, setSearchedText] = useState("")
    let text;
    let isLoggedIn = props.isLoggedIn;
    const btnStyle= {
      borderRadius:"0",
      textAlign:"center"
    }
    const search = (event) => {
      event.preventDefault();
      if (searchedText !== "") {
        const route = `/search?q=${searchedText}`
        history.push(route);
      }
    };

    const logout = (event) => {
      event.preventDefault();
      localStorage.clear();
      window.location.reload();
    }

    const getSearchedText = (event) => {
      text = event.target.value;
      setSearchedText(text)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark pb-40">
        <Link to="/">
          <a className="navbar-brand" href="#">Amit Satanic Cakes</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse  w-100 order-1 order-md-0 dual-collapse2" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {props.isLoggedIn ? <li className="nav-item active">
              <Link to="/">
                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
              </Link>
            </li>:<React.Fragment/>}
          </ul>
        </div>
        <div className="mr-10" style={{width:"30rem"}}>
          <form className="form-inline my-2 my-lg-0" style={{width:"30rem"}} >
            <div className="input-group">
                <input onChange={getSearchedText} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <div className="input-group-append">
                <a href="#" onClick={search} className="nav-link btn btn-warning my-2 my-sm-0" type="submit" style={btnStyle}><FaSearch/></a>
              </div>
            </div>
          </form>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            {props.isLoggedIn ? <li className="nav-item" style={{marginRight:"20px"}}>
              <Link to="/orders">
                <a className="nav-link" href="#" style={{color:"#fff"}}>Orders</a>
              </Link>
            </li>:<React.Fragment/>}  
            {props.isLoggedIn ? <li className="nav-item" style={{marginRight:"20px"}}>
              <Link to="/profile">
                <a className="nav-link" href="#" style={{color:"#fff"}}>Profile</a>
              </Link>
            </li>:<React.Fragment/>}
            {!props.isLoggedIn ? <li className="nav-item">
              <Link to="/login">
                <a className="nav-link btn-danger" href="#">Login</a>
              </Link>
            </li>:<React.Fragment/>}
            {!props.isLoggedIn ? <li className="nav-item">
              <Link to="/signup">
                <a className="nav-link btn-success" href="#">Signup</a>
              </Link>
            </li>:<React.Fragment/>}
            {props.isLoggedIn ? <li className="nav-item" style={{marginRight:"10px"}}>
              <Link to="/cart">
                <a className="nav-link btn-warning" href="#" style={{padding:"5px",marginTop:"1px"}}>
                  <FaCartPlus style={{fontSize:"27px",color:"#000"}}/>
                  <span className='badge badge-warning' id='lblCartCount'>{props.cartCount}</span>
                </a>
              </Link>
            </li>:<React.Fragment/>}
            {props.isLoggedIn ? <li className="nav-item">
              <a 
              onClick={logout} 
              className="nav-link btn-danger" 
              href="#" 
              style={{padding:"10px"}}
              >
                Logout
              </a>
            </li>:<React.Fragment/>}
            </ul>
        </div>
      </nav>
    )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn:state.login.isLoggedIn,
    cartCount:state.cart.cartCount
  }
}

export default connect(mapStateToProps)(Navbar);