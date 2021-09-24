import { Link } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { CircleLoader } from 'react-spinners';
import { connect } from 'react-redux';
import { fetchLogin } from '../reduxstore';

function Login({error, loading, fetchLogin}){
    let textData ="";
    let typedPassword ="";
    const [emailError, setEmailError] = useState("")
    const loaderStyle = {
        position:"absolute",
        left:"50%",
        top:"50%",
        zIndex:"999",
    }
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const login = (event) => {
        console.log("Here");
        let validationError = false;
        event.preventDefault();
        if (textData === "") {
            setEmailError("Email is required");
            validationError = true;
        }
        else if (!validateEmail(textData)) {
            setEmailError("Invalid email");
            validationError = true;
        }
        if (!validationError) {
            console.log("Here1");
            fetchLogin(textData, typedPassword);
            // this.props.history.push("/");
        }
    }

    const getTypedEmail = (event) => {
        textData = event.target.value;
    }

    const getTypedPassword = (event) => {
        typedPassword = event.target.value;
    }



    return (
        <div>
            {loading ? <div style={loaderStyle}><CircleLoader/></div>:<div className="container mt-5">
                <div className="form-group">
                    <input onChange={getTypedEmail} type="text"className="form-control" placeholder="Type your email here..."/>
                    <div style={{color:"red",fontSize:"15px"}}>{emailError}</div>
                </div>
                <div className="form-group">
                    <input onChange={getTypedPassword} type="password"className="form-control" placeholder="Type your password here..."/>
                </div>
                <div className="form-group">
                <button onClick={login} className="btn btn-danger">Login</button>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/forgot">
                            <a className="btn btn-danger" href="#">Forgot password</a>
                        </Link>
                    </div>
                </div>
            </div>}
            <div className="alert">
                {error}
            </div>
        </div>
            
            
        
    )
}

const mapStateToProps = (state) => {
    return {
        loading:state.login.loading,
        error:state.login.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogin: (email, password) => {
            dispatch(fetchLogin(email, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);