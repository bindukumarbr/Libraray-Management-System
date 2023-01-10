import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";


const ReadBook = () => {


    let [info, setInfo] = useState([])


    let params = useParams()

    useEffect(() => {

        let fetchData = async () => {

            let response = await fetch(`http://localhost:4000/books/${params.id}`)

            let data = await response.json()

            setInfo(data)

        }
        fetchData()
    })


    return (
        <div>
            <h1>Read More</h1>

            <div>
                <h3>Title : {info.tittle}</h3>

                <p>Short Desc : {info.shortDescription}</p>

                    <br />

                <p>Long Desc : {info.longDescription}</p>
            </div>

        </div>
    );
}

export default ReadBook;