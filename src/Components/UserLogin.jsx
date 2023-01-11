import { useNavigate } from "react-router-dom";

import "../Styles/UserLogin.css"


const UserLogin = () => {



    let navigate = useNavigate()

    let login = () => {
        navigate('/user/')
    }

    return (
        <div className="userLogin">
            <div className="form001">
                <h2>User Login</h2>
            </div>
            <div className="formInput">
                <form onSubmit={login}>
                    <div className="email">
                        <label htmlFor="email">Email</label> <br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            required
                        // value={email}
                        // onChange={(e) => setMail(e.target.value)}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label> <br />
                        <input
                            type="password"
                            placeholder=" Enter Password"
                            name="password"
                            required
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn">Login</button>
                </form>
            </div>
        </div>
    );
}

export default UserLogin;