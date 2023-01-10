import { useState } from "react";

import { useNavigate } from "react-router-dom";








const AddBooks = () => {

    let [title, setTitle] = useState("")

    let [authors, setAuthors] = useState("")

    let [categories, setCategories] = useState("")

    let [pageCount, setPageCount] = useState("")

    let [shortDescription, setShortDescription] = useState("")

    let [longDescription, setLongDescription] = useState("")

    let [thumbnailUrl, setThumbnailUrl] = useState("")

    let handleSubmit = (e) => {

        e.preventDefault() //not to refresh on submit

        let bookData = { title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl } //data to be posted

        //posting to the server

        fetch('http://localhost:4000/books', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        })

        alert(`Book has been added`)

        navigate('/admin/book-list')
    }

    let navigate = useNavigate()



    return (
        <div>
            <h1>Add a Book</h1>

            <div className="form">

                <form action="" onSubmit={handleSubmit}>

                    <div className="title"><input type="text" placeholder="Title of the Book" required value={title} onChange={(e) => setTitle(e.target.value)} /></div>

                    <div className="authors"><input type="text" placeholder="Written by" required value={authors} onChange={(e) => setAuthors(e.target.value)} /></div>

                    <div className="categories"><input type="text" placeholder="Category" required value={categories} onChange={(e) => setCategories(e.target.value)} /></div>

                    <div className="pageCount"><input type="number" placeholder="No of Pages" required value={pageCount} onChange={(e) => setPageCount(e.target.value)} /></div>

                    <div className="shortDescription"><textarea name="shortDescription" id="sD" cols="30" rows="10" required value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}></textarea></div>

                    <div className="longDescription"><textarea name="longDescription" id="lD" cols="30" rows="10" required value={longDescription} onChange={(e) => setLongDescription(e.target.value)}></textarea></div>

                    <div className="thumbnailUrl"><input type="text" required value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} /></div>

                    <button>Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBooks;