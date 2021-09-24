import {useState} from 'react';

function Admin() {
    const userNameArr = [
        {
            name:"Amit Vikram",
            email:"amit@test.com"
        },
        {
            name:"John George",
            email:"amit@targiver.com"
        },
        {
            name:"Augustine Daug",
            email:"aug@test.com"
        },
        {
            name:"Ashu Lwkhi",
            email:"ashu@test.com"
        },
        {
            name:"Darth Vader",
            email:"osssd@test.com"
        },
    ]
    const [names, setNames] = useState(userNameArr);
    const getTypedName = (e) => {
        setNames(names.filter((userName) => {
            return userName.name.includes(e.target.value);
        }));
        if (e.target.value === "") {
            return setNames(userNameArr);
        }
        console.log(names);
    }
    return (
        <div className="searchable-table">
            <div className="row">
                <div className="form-group">
                    <input 
                    type="text" 
                    name="username" 
                    id="user" 
                    placeholder="Type username here"
                    onChange={getTypedName}
                    />
                </div>
            </div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          names.map((userName, key) => {
                              return (
                                  <tr key={key}>
                                      <td>{userName.name}</td>
                                      <td>{userName.email}</td>
                                  </tr>
                              )
                          }) 
                        }
                    </tbody>
                </table>
            </div>  
        </div>
    )
}

export default Admin;