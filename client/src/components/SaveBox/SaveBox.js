import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ViewButton from "../ViewButton/ViewButton";
import DeleteButton from "../DeleteButton/DeleteButton"


function SaveBox() {
    const [apiBook, setapiBook] = useState("");

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBook(apiBook)
            .then(res => {
                setapiBook(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div style={{ backgroundColor: "white" }}>
                <ul style={{ listStyleType: 'none' }}>
                    {apiBook ? (
                        <div>
                            {apiBook.map(result =>
                                <li id='results' key={result.id} >
                                    <div className="card" style={{ border: 'none', marginTop: '40px' }}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <b>{result.title}</b>
                                                <br />
                                                <div style={{ marginBottom: '15px' }}>written by {result.author}</div>
                                            </div>
                                            <div className="col-md-6">
                                                <DeleteButton
                                                    onClick={() => deleteBook(result._id)}
                                                />
                                                <ViewButton link={result.link} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2">{result.image ? (
                                            <img src={result.image} alt={result.title} />
                                        ) : (
                                                <p>No Image</p>
                                            )}</div>
                                        <div className="col-md-10" style={{ height: "180px", overflowY: 'scroll', }}>{result.description}</div>
                                    </div>
                                </li>
                            )
                            }
                        </div>
                    ) : (
                            <h3> </h3>
                        )}
                </ul>
            </div>
        </div >
    )
}
export default SaveBox;
