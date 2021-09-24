import queryString from 'query-string';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cake from './Cake';
import { CircleLoader } from 'react-spinners';
import { connect } from 'react-redux';
import { fetchSearchCakes } from '../reduxstore';

const Search = ({cakes,error,loading, fetchSearchCakes}) => {
    const location = useLocation();
    const loaderStyle = {
        position:"absolute",
        left:"50%",
        top:"50%",
        zIndex:"999",
    }
    let query = queryString.parse(location.search)
    useEffect(() => {
        fetchSearchCakes(query.q);
    },[query.q]);
    return (
        <div style={{marginTop:"20px", marginLeft:"20px"}}> 
       {loading ? <div class={loaderStyle}><CircleLoader/></div> : <div>
            <div style={{display:"grid", gridTemplateColumns:"33% 33% 33%",gridGap:"50px"}}>
                {cakes.map((each, index) => {
                    return <Cake key={index} cake={each}/>
                })}
            </div>
            {cakes.length == 0 && <div className="alert">
                <h1>Sorry no results found for search {query.q}</h1>
            </div>}
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
        fetchSearchCakes:(searchTerm) => dispatch(fetchSearchCakes(searchTerm))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);