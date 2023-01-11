import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../Styles/AddUser.css"



const AddUser = () => {

    let [firstName, setFirstName] = useState('')

    let [lastName, setLastName] = useState('')

    let [age, setAge] = useState('')

    let [email, setEmail] = useState('')


    let handleSubmit = (e) => {

        e.preventDefault()

        let userData = { firstName, lastName, age, email }

        fetch('http://localhost:4000/users',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            }
        )

        alert('user has been added')

        navigate('/admin/user-list')
    }

    let navigate = useNavigate()

    return (
        <div className="userForm">

            <div className="imageUser">
                <img src="https://ouch-cdn2.icons8.com/dBc5V46FLA4a-LdOu7W_uE3hg9P9NqOTYs_Dud-pwDA/rs:fit:256:214/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODAv/NzJkMjY5ZWItYWIx/MS00NDlkLWEzMDMt/M2Y3ZmI0M2VjZTAx/LnBuZw.png" alt="" />
            </div>

            <div className="formUser">

                <form action="" onSubmit={handleSubmit}>

                    <h1 className="userHeading">Add User</h1>

                    <div className="nameUser">
                        <div>
                            <input type="text" id="firstName" placeholder="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" id="lastName" placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <input type="number" id="age" placeholder="Age" required value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div>
                        <input type="email" id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <button className="btnUser">Add User</button>

                </form>

            </div>

        </div>
    );
}

export default AddUser;