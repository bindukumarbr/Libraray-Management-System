import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../Styles/AddBooks.css"






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
        <div className="parent000">
            <div className="form">
                <form action="" onSubmit={handleSubmit}>

                    <h1>Add Books</h1>

                    <div className="title"><input type="text" placeholder="Title of the Book" required value={title} onChange={(e) => setTitle(e.target.value)} /></div>

                    <div className="authors"><input type="text" placeholder="Written by" required value={authors} onChange={(e) => setAuthors(e.target.value)} /></div>

                    <div className="categories"><input type="text" placeholder="Category" required value={categories} onChange={(e) => setCategories(e.target.value)} /></div>

                    <div className="pageCount"><input type="number" placeholder="No of Pages" required value={pageCount} onChange={(e) => setPageCount(e.target.value)} /></div>

                    <div className="description">
                        <div className="shortDescription">
                            <label htmlFor="longDescription">Short Description</label>
                            <textarea name="shortDescription" cols="30" rows="10" required value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}>short Description</textarea></div>

                        <div className="longDescription">
                            <label htmlFor="longDescription">Long Description</label>
                            <textarea name="longDescription" cols="30" rows="10" required value={longDescription} onChange={(e) => setLongDescription(e.target.value)}></textarea></div>
                    </div>

                    <div className="thumbnailUrl"><input type="text" required value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} placeholder='Image Url' /></div>

                    <button className="btn002">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBooks;