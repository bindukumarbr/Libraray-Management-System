import { Link } from "react-router-dom";

import "../Styles/AdminNavBar.css"




const AdminNavBar = () => {
    return (
        <div className="parentNav">
            <div className="nav">
                <div className="portal">
                    <h1>Admin Portal</h1>
                </div>
                <div className="nav_Links">
                    <nav>
                        <Link to='/admin/'>Dashboard</Link>
                        <Link to="/admin/add-book">Add Books</Link>
                        <Link to='/admin/add-user'>Add Users</Link>
                        <Link to='/admin/book-list'>Book Lists</Link>
                        <Link to="/admin/user-list">User Lists</Link>
                        <Link to='/'>Log-Out</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default AdminNavBar;