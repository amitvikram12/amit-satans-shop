import axios from "axios";
import { useState,useEffect } from "react";
import StarRatingComponent from "react-star-rating-component";
import { CircleLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux'
import { addToCart } from "../reduxstore";

const CakeDetails = ({match, location, addToCart}) => {
    const {params : {id}} = match;
    const history = useHistory();
    console.log(match);
    const [cake, setCake] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const loaderStyle = {
        position:"absolute",
        left:"50%",
        top:"50%",
        zIndex:"999",
    }
    const cakeUrl = `${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/cake/${id}`;

    useEffect(() => {
        axios({
            method:"GET",
            url:cakeUrl,
        })
        .then((response) => {
            console.log(response.data);
            setCake(response.data.data)
            setisLoading(false);
            console.log(cake);
        }, (error) => {
            console.log(error);
            setisLoading(false);
        })
    },[]);
    return (
        <div style={{marginTop:"20px", marginLeft:"20px"}}>
            {isLoading ? <div style={loaderStyle}><CircleLoader/></div>:    <div className="row">
                <div className="col-6">
                    <img src={cake.image} alt="Cake Image" style={{height:"30rem",width:"30rem"}}/>
                </div>
                <div className="col-6">
                    <table className="table">
                        <tr>
                            <td>Name: {cake.name}</td>
                        </tr>
                        <tr>
                            <td>Description: {cake.description}</td>
                        </tr>
                        <tr>
                            <td>Flavour: {cake.flavour}</td>
                        </tr>
                        <tr>
                            <td>Cake type: {cake.type}</td>
                        </tr>
                        <tr>
                            <td>Price: {cake.price}</td>
                        </tr>
                        <tr>
                            <td>Weight: {cake.weight} kg</td>
                        </tr>
                        <tr>
                            <td>Created by: {cake.owner?.name}</td>
                        </tr>
                        <tr>
                            <td>Ingredients</td>
                            <td>
                                <ul>
                                    {cake.ingredients?.map((each, index) =>{

                                        return(
                                            <li>{each}</li>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <StarRatingComponent
                                name="Rating"
                                value="4.5"
                                starCount="5"
                                renderStarIconHalf={() => {
                                    return (
                                    <span>
                                        <span style={{position: 'absolute'}}><i className="far fa-star" /></span>
                                        <span><i className="fas fa-star-half" /></span>
                                    </span>
                                    );
                                }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button
                                onClick={() => addToCart(cake)} 
                                className="btn btn-block btn-primary">
                                Add to cart
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>}
        </div>
    );
};

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

export default connect(mapStateToProps,mapDispatchToProps)(CakeDetails);