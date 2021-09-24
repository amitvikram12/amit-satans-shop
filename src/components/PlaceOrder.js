import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string'
import { useState } from "react";
import { connect } from "react-redux";
import { addCakeOrder } from "../reduxstore";

const PlaceOrder = ({loading, cart, addCakeOrder}) => {
    const btnStyle= {
        height:"60px",
        padding:"10px",
        fontSize:"20px",
        borderRadius:"0"
    }
    const location = useLocation()
    const query = queryString.parse(location.search)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [phone, setPhone] = useState("")
    const [area, setArea] = useState("")

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeAddress = (e) => {
        setAddress(e.target.value)
    }
    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }
    const handleChangePincode = (e) => {
        setPincode(e.target.value)
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleChangeArea = (e) => {
        setArea(e.target.value)
    }

    const checkoutOrder = (e) => {
        e.preventDefault()
        const data = {
            name,
            address,
            city,
            area,
            pincode,
            phone,
            cakes:cart,
            price:query.price
        }
        addCakeOrder(data)
    }
    return (
        <div className="container">
            <h2>Place Order</h2>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            Order Details
                        </div>
                        <div className="card-body">
                                <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => {
                                        return(
                                            <tr>
                                                <td>
                                                    <img 
                                                        src={item.image} 
                                                        alt="cake img" 
                                                        style={{width:"60px",height:"60px"}}
                                                    />
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.quantity}</td>
                                                <td>&#x20B9; {item.quantity * item.price}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <form action="#" method="POST">
                                <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input onChange={handleChangeName} type="text" name="name" id="name" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <textarea onChange={handleChangeAddress} name="address" id="address" cols="30" rows="5" className="form-control"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="area">Area</label>
                                        <input onChange={handleChangeArea} type="text" name="area" id="area" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input onChange={handleChangeCity} type="text" name="city" id="city" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pincode">Pincode</label>
                                        <input onChange={handleChangePincode} type="text" id="pincode" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input onChange={handleChangePhone} type="text" id="phone" className="form-control"/>
                                    </div>
                                    <div className="row">
                                        <h3>Price : &#x20B9; {query.price}</h3>
                                    </div>
                                    <div className="row">
                                        <input type="submit" style={btnStyle} onClick={checkoutOrder} value="Place Order" className="btn btn-warning btn-block"/>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading:state.loading,
        cart:state.cart.cart
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        addCakeOrder:(data) => dispatch(addCakeOrder(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlaceOrder);