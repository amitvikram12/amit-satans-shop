import {Component} from 'react';

class UserList extends Component{
    constructor() {
        super();
        this.state = {
            onlineUsers:0
        };
    }
    joinMeet = () => {
        this.setState({onlineUsers:this.state.onlineUsers + 1});
    }
    render() {
        return (<div>
            {this.state.onlineUsers}
            <button className="btn btn-primary" onClick={this.joinMeet}>Join</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>)
    }
}

export default UserList;