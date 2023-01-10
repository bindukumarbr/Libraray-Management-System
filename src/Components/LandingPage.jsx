import { Link } from "react-router-dom";

import "../Styles/LandingPage.css"

const LandingPage = () => {
    return (
        <div className="coverPage">

            <div className="landingPage">

                <div className="loginType">

                    <h1>Library Management System</h1>

                    <div id="page">
                        <Link to="/admin-login">Admin Login</Link>
                        
                        <Link to="/user-login">User Login</Link>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default LandingPage;