import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ViewButton from "../ViewButton/ViewButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import './saveBox.css'


function SaveBox() {
    const [apiBook, setapiBook] = useState([]);

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        console.log(apiBook)
        API.getBook([])
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
              <div id='anchor' class="jumbotron" style={{ textAlign: 'center', background:'none', marginTop: '50px' }}>
                <h1>(React) Google Books Search
           </h1>
                <h3>
                    Check out your saved books!
           </h3>
            </div>
            <div style={{ backgroundColor: "white" }}>
                <ul style={{ listStyleType: 'none' }}>
                    {apiBook.length ? (
                        <div>
                            {apiBook.map(result =>
                                <li data-aos="fade-up"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                // data-aos-duration="1000"
                                data-aos-easing="ease-in-out-back"
                                // data-aos-mirror="true"
                                data-aos-once="false"
                                // data-aos-anchor="#anchor"
                                data-aos-anchor-placement="center-bottom" class='show' id='results' key={result.id} >
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
                            <h5 style = {{textAlign: 'center'}}> You haven't saved any books yet</h5>
                        )}
                </ul>
            </div>
        </div >
    )
}
export default SaveBox;
