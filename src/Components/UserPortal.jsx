import { Route, Routes } from "react-router-dom";

import BookList from "./BookList";

import UserDashBoard from "./UserDashBoard";

import UserNavBAr from "./UserNavBar";

import ReadBook from "./ReadBook"


const UserPortal = () => {




    return (
        <div>
            <UserNavBAr />
            <Routes>
                <Route path="/" element={<UserDashBoard />} />
                <Route path="/book-list" element={<BookList />} />
                <Route path="/book-list/:id" element={<ReadBook />} />
            </Routes>
        </div>
    );
}

export default UserPortal;