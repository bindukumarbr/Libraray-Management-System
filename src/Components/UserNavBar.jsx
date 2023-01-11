import { Link } from "react-router-dom";



const UserNavBAr = () => {
    return (
        <div className="parentNav">
            <div className="nav">
                <div className="portal">
                    <h1>User Portal</h1>
                </div>
                <div className="nav_Links">
                    <nav>
                        <Link to='/user/'>Dashboard</Link>
                        <Link to='/user/book-list'>Book Lists</Link>
                        <Link to='/'>Log-Out</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default UserNavBAr;