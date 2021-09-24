import axios from "axios";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import {connect} from 'react-redux'
import { fetchCart, removeFromCart, removeOneFromCart } from "../reduxstore";
import { useHistory } from "react-router-dom";

function Cart({cart, loading, fetchCart, removeFromCart, removeOneFromCart}) {
    const loaderStyle = {
        position:"absolute",
        left:"50%",
        top:"50%",
        zIndex:"999",
    }
    const btnStyle = {
        borderRadius:"0"
    }
    const history = useHistory()
    useEffect(() => {
        fetchCart()
    },[]);

    let total = 0
    const placeOrder = (total) => {
        const route = '/placeorder?price=' + total
        history.push(route)
    }

    return (
        <div>
            {loading ? <div style={loaderStyle}><CircleLoader/></div>: <div style={{marginTop:"15px", marginLeft:"20px"}}><table className="table table-bordered" style={{width:"80%"}}>
                <thead className="thead-dark">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => {
                            total += item.price * item.quantity
                            return (
                                <tr key={index}>
                                    <td>
                                        <img 
                                        src={item.image} 
                                        alt="cake img" 
                                        style={{width:"60px",height:"60px"}}
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>&#x20B9; {item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <button 
                                        className="btn btn-danger" 
                                        onClick={() => removeFromCart(item.cakeid)}
                                        style={btnStyle}
                                        >
                                            Remove from cart
                                        </button>
                                        {item.quantity > 1 && <button 
                                        className="btn btn-warning" 
                                        style={{marginLeft:"5px",...btnStyle}}
                                        onClick={() => removeOneFromCart(item.cakeid)}
                                        >
                                            Remove only 1 from the cart
                                        </button>}
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="4">Total:</th>
                        <td>
                            <div className="row">
                                <div className="col-6">
                                    <strong>&#x20B9; {total}</strong>
                                </div>
                                {total > 0 && <div className="col-6">
                                    <button onClick={() => placeOrder(total)} className="btn btn-success" style={btnStyle}>Place Order</button>
                                </div>}
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table></div>}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        loading:state.cart.loading,
        cart:state.cart.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart:() => dispatch(fetchCart()),
        removeFromCart: (data) => dispatch(removeFromCart(data)),
        removeOneFromCart: (data) => dispatch(removeOneFromCart(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart);