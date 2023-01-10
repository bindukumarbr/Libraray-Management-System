import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AdminLogin.css"


const AdminLogin = () => {

    let [email, setMail] = useState('')


    let [password, setPassword] = useState('')

    let navigate = useNavigate()

    let login = (e) => {

        e.preventDefault()

        let data = { email, password }

        if (email === 'admin@gmail.com' && password === '74123') {
            navigate('/admin/')
        } else (
            alert('Invalid Input')
        )

    }
    return (
        <div className="adminLogin">
            <div className="form">
                <h2>Admin Login</h2>
            </div>
            <div className="formInput">
                <form onSubmit={login}>
                    <div className="email">
                        <label htmlFor="email">Email</label><br />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            required
                            value={email}
                            onChange={(e) => setMail(e.target.value)}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label><br />
                        <input
                            type="password"
                            placeholder=" Enter Password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn">Login</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;