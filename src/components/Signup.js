import {Component} from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor() {
        super();
        this.textData = "";
        this.typedPassword = "";
        this.typedName = "";
        this.state = {
            name: {
                value:"",
                message:""
            },
            email: {
                value:"",
                message:""
            },
            password: {
                value:"",
                message:""
            }
        };
    }

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    signup = (event) => {
        event.preventDefault();
        let error = false;
        if (this.typedName === "") {
            let currState = {...this.state};
            currState.name.message = "Name is required"
            this.setState({currState});
            if (!error) {
                currState.password.message = "";
                currState.email.message = "";
            }
            error = true;
        }
        if (this.textData === "") {
            let currState = {...this.state};
            currState.email.message = "Email is required"
            this.setState({currState});
            if (!error) {
                currState.password.message = "";
                currState.name.message = "";
            }
            error = true;
        }
        else if (!this.validateEmail(this.textData)) {
            let currState = {...this.state};
            currState.email.message = "Email is invalid"
            this.setState({currState});
            if (!error) {
                currState.password.message = "";
                currState.name.message = "";
            }
            error = true;
        }
        if (this.typedPassword.length < 8) {
            let currState = {...this.state};
            if (!error) {
                currState.name.message = "";
                currState.email.message = "";
            }
            currState.password.message = "Password should be atleast 8 characters long"
            this.setState({currState}); 
            error = true;
        }
        if (!error) {
            axios({
               method:"POST",
               url: `${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/signup`,
               data: {name:this.typedName, email:this.textData, password:this.typedPassword},
            }).then((response) => {
                console.log(response.data);
                this.setState({email:{value:this.textData, message:""}, password:{value:this.typedPassword, message:""}});
                console.log(this.state);
            }, (error) => {
                console.log(error);
            })
            //this.props.updateState({name:this.typedName, email:this.textData})
        }
    }

    getTypedEmail = (event) => {
        this.textData = event.target.value;
    }

    getTypedName = (event) => {
        this.typedName = event.target.value;
    }

    getTypedPassword = (event) => {
        this.typedPassword = event.target.value;
    }



    render() {
        return (
            <div>
                <div className="form-group">
                    <input onChange={this.getTypedName} type="text"className="form-control" placeholder="Type your name here..."/>
                    <div style={{color:"red",fontSize:"15px"}}>{this.state.name.message}</div>
                </div>
                <div className="form-group">
                    <input onChange={this.getTypedEmail} type="text"className="form-control" placeholder="Type your email here..."/>
                    <div style={{color:"red",fontSize:"15px"}}>{this.state.email.message}</div>
                </div>
                <div className="form-group">
                    <input onChange={this.getTypedPassword} type="password"className="form-control" placeholder="Type your password here..."/>
                    <div style={{color:"red",fontSize:"15px"}}>{this.state.password.message}</div>
                </div>
                <div className="form-group">
                    <input type="submit" onClick={this.signup} value="Signup" className="btn btn-danger"/>
                </div>
            </div>
        )
    }
}

export default Signup;