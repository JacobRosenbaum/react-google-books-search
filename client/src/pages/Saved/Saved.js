import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import ViewButton from "../../components/ViewButton/ViewButton";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import Header from "../../components/Header/Header"
import "./saved.css"

function Search() {
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
            <Header />
            <div class="saveBody">
                <div id='anchor' class="jumbotron" style={{ textAlign: 'center', background: 'none', marginTop: '50px', color: 'white' }}>
                    <h1>  <span class="text_1"> Google Books Search </span>
           </h1>
                    <h3>
                        Check out your saved books!
           </h3>
                </div>
                <div style = {{color:'white', fontFamily: 'Tajawal sans-serif'}}>
                    <ul style={{ listStyleType: 'none', background: 'none' }}>
                        {apiBook.length ? (
                            <div style={{background: 'none'}}>
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
                                        <div className="card" style={{ border: 'none', marginTop: '40px', background: 'none' }}>
                                            <div className="row">
                                                <div id="titleAuthor" className="col-md-6">
                                                    <b style={{fontSize: '20px'}}>{result.title}</b>
                                                    <br />
                                                    <div style={{ marginBottom: '15px', fontSize:"17px" }}>written by {result.author}</div>
                                                </div>
                                                <div id='button'  className="col-md-6">
                                                    <DeleteButton
                                                        onClick={() => deleteBook(result._id)}
                                                    />
                                                    <ViewButton link={result.link} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">{result.image ? (
                                                <img style={{ height: "160px", width: '110px' }} src={result.image} alt={result.title} />
                                            ) : (
                                                    <p>No Image</p>
                                                )}</div>
                                            <div id="description" className="col-md-10" style={{ height: "160px", overflowY: 'scroll', fontSize: '16px' }}>{result.description}</div>
                                        </div>
                                    </li>
                                )
                                }
                            </div>
                        ) : (
                                <h5 style={{ textAlign: 'center' }}> You haven't saved any books yet</h5>
                            )}
                    </ul>
                </div>
            </div >
        </div>
    )
}
export default Search;