import AdminNavBar from "./AdminNavBar";

import AdminDash from "./AdminDash";

import { Routes, Route } from "react-router-dom";

import BooksList from "./BookList";

import UsersList from "./UsersList";

import ReadBook from "./ReadBook";

import AddBooks from "./AddBooks";

import AddUser from "./AddUser";




const AdminHome = () => {

    return (

        <div>
            <AdminNavBar />

            <Routes>

                <Route path="/" element={<AdminDash />} />

                <Route path="/book-list" element={<BooksList />} />

                <Route path="/user-list" element={<UsersList />} />

                <Route path="/book-list/:id" element={<ReadBook />} />

                <Route path="/add-book" element={<AddBooks />} />

                <Route path="/add-user" element={<AddUser/>}/>

            </Routes>

        </div>
    )
}
export default AdminHome;