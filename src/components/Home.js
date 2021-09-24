import CakeList from "./CakeLIst";
import Carousel from "./Carousel";
import { connect } from 'react-redux';
import { useEffect } from "react";
import {fetchUserData} from '../reduxstore'
function Home(props) {
   // const url = `${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/allcakes`
    useEffect(() => {
        props.fetchUserData(props.authToken)
    }, [])
    return (
        <div>
            <div className="row" style={{width:"100%", height:"75vh"}}>
                <Carousel/>
            </div>
            <div className="container-fluid">
            <CakeList/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn:state.login.isLoggedIn,
        loading:state.login.loading,
        authToken:state.login.authToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserData: (authToken) => dispatch(fetchUserData(authToken)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);