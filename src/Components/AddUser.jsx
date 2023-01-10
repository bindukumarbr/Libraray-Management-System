import { useState } from "react";

import { useNavigate } from "react-router-dom";





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
        <div>
            <h1>Add User</h1>

            <form action="" onSubmit={handleSubmit}>

                <div>
                    <input type="text" id="firstName" placeholder="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <input type="text" id="lastName" placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <input type="number" id="age" placeholder="Age" required value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <input type="email" id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <button>Add User</button>

            </form>
        </div>
    );
}

export default AddUser;