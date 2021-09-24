import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../reduxstore";
import { FaCartPlus } from "react-icons/fa";
// const cake = {
//     name:"Chocolate Truffle Cake",
//     price:"500",
//     image:"truffle.png"
// }
function Cake(props) {
    const btnStyle = {
        borderRadius:"0",
        height:"50px",
        fontSize:"19px",
        padding:"12px"
    }
    return (
        <div>
            <div className="card" style={{width: "32rem"}}>
                <img src={props.cake.image} className="card-img-top" alt="..." style={{height:"270px",width:"32rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link 
                        to={`cakedetails/${props.cake.cakeid}`} 
                        params={{cakeId:props.cake.cakeid}}
                        >
                            <div style={{color:"black"}}>{props.cake.name}</div>
                        </Link>
                    </h5>
                    <p className="card-text">&#x20B9; {props.cake.price}</p>
                    <a 
                    href="#"
                    onClick={() => props.addToCart(props.cake)} 
                    className="btn btn-warning btn-block"
                    style={btnStyle}
                    >
                    <FaCartPlus/> Add to Cart
                    </a>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        loading:state.cart.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart:(data) => dispatch(addToCart(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cake);