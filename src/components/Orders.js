import { useEffect } from "react"
import { connect } from "react-redux"
import { getOrderList } from "../reduxstore"
import moment from "moment"
import { CircleLoader } from "react-spinners"
const Orders = ({loading, getOrderList, orders}) => {
    useEffect(() => {
        getOrderList()
    },[])

    const loaderStyle = {
        position:"absolute",
        left:"50%",
        top:"50%",
        zIndex:"999",
    }

    const getReadableDate = date => {
        return moment(date).format("Do MMM YYYY")
    }

    return (
        <div style={{marginLeft:"25px", position:"relative"}}>
            {loading ? <CircleLoader style={loaderStyle}/> : orders.map((order, key) => {
                return(<div key={key} style={{marginTop:"10px"}}>
                    <div>
                        <h4>Date: {`${getReadableDate(order.orderdate)}`}</h4>
                        <h4>Reception status: {order.pending ? 'Pending' : 'Order Recieved' }</h4>
                        {!order.pending && <h4>Completion Status: {order.completed ? "Order fullfilled" : "Order to be fullfilled"} </h4>}
                        <h4 style={{textTransform:"capitalize"}}>Mode of Payment: {order.mode}</h4>
                    </div>
                    <div className="row">
                        <table className="table table-bordered table-condensed" style={{width:"50rem"}}>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            {order.cakes.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td>
                                            <img 
                                                src={item.image} 
                                                alt="cake img" 
                                                style={{width:"60px",height:"60px"}}
                                            />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.quantity * item.price}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
                )
            })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading:state.orders.loading,
        orders:state.orders.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrderList: () => dispatch(getOrderList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders)