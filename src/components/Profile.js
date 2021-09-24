import {connect} from 'react-redux'
const Profile = ({userdata}) => {
    console.log(userdata)
    return (
        <div style={{marginLeft:"25px",marginTop:"20px"}}>
            <h1 style={{marginBottom:"20px"}}>User Profile</h1>
            <table className="table table-bordered" style={{width:"45rem"}}>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{userdata.name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{userdata.email}</td>
                    </tr>
                    <tr>
                        <th>Role</th>
                        <td>{userdata.role}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        userdata:state.login.userdata
    }
}
export default connect(mapStateToProps)(Profile)