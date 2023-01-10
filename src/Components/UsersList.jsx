import { useEffect, useState } from "react";

import "../Styles/UserList.css"


const UsersList = () => {

    let [user, setUser] = useState([])


    useEffect(() => {

        let fetchData = async () => {

            let response = await fetch("http://localhost:4000/users")

            let json = await response.json()

            setUser(json)

        }
        fetchData()
    }, [])


    let handleRemove = (id, firstName, lastName) => {

        setUser(user.filter(x => x.id !== id))
        alert(`${firstName} ${lastName} has been removed`)

    }

    return (
        <div className="parent">
            <h1 className="hello">Users list</h1>
            <h2 className="hello">User nos : {user.length}</h2>

            {
                user.map((data) => (
                    <div className="userData">
                        <div id="users">
                            <h3>Name : {data.firstName} {data.lastName}</h3>
                            <h4>Age : {data.age}</h4>
                            <h4> E-mail : {data.email}</h4>
                            <button id='btn0' onClick={() => handleRemove(data.id, data.firstName, data.lastName)}>Remove</button>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default UsersList;