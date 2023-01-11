import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import "../Styles/BooksList.css"



const BooksList = () => {

    let [books, setBooks] = useState([])


    useEffect(() => {

        let fetchData = async () => {

            let response = await fetch('http://localhost:4000/books')

            let json = await response.json()

            setBooks(json)

        }
        fetchData()

    }, [books])

    let handleDelete = (id, title) => {

        fetch(`http://localhost:4000/books/${id}`, {
            method: 'DELETE'
        })
        alert(`${title} has been deleted`)      //fetch the data to delete with unique key and update use effect, use method DELETE.. based on the id
    }

    let navigate = useNavigate();

    let readFn = (id) => {

        if (location.pathname === '/admin/book-list') {
            navigate(`/admin/book-list/${id}`)
        } else {
            navigate(`/user/book-list/${id}`)
        }

    }

    let location = useLocation()


    return (
        <div className="parent">
            <h1>Books List</h1>
            <h2>Books List : {books.length}</h2>
            {
                books.map((data) => (
                    <div className="hello">
                        <div>
                            <img src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="info">
                            <h3> Title : {data.title}</h3>
                            <h5> Authors : {data.authors}</h5>
                            <h5> No of Pages : {data.pageCount}</h5>
                            <h5> Category : {data.categories}</h5>
                            <button id='btn' onClick={() => readFn(data.id)}>Read More</button>
                            {location.pathname === "/admin/book-list" && <button id='btn' onClick={() => handleDelete(data.id, data.title)}>Remove</button>}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default BooksList