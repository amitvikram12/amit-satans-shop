import Cake from "./Cake";
import {useEffect} from 'react';
import { CircleLoader } from "react-spinners";
import { connect } from "react-redux";
import { fetchAllCakes } from "../reduxstore/cakes/cakeActions";

const CakeList = ({loading, cakes, error, fetchAllCakes}) => {

    const loaderStyle = {
        position:"absolute",
        left:"50%",
        top:"50%",
        zIndex:"999",
    }
    useEffect(() => {
        fetchAllCakes();
    },[])

    return (
        <div>
            {loading ? <div style={loaderStyle}><CircleLoader/></div> : <div style={{display:"grid", gridTemplateColumns:"33% 33% 33%",gridColumnGap:"10px",gridRowGap:"20px"}}>
                    {cakes.map((cake, index) => {
                        return (
                             <Cake cake={cake} key={index}/>
                        )
                    })}
                </div>}
        </div>
        
        
    )
}

const mapStateToProps = (state) => {
    return {
        loading:state.cake.loading,
        cakes:state.cake.cakes,
        error:state.cake.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCakes:() => dispatch(fetchAllCakes())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeList);