import React, { useState } from "react";
import API from "../utils/API";
import SearchButton from "../SearchButton/SearchButton";
import ViewButton from "../ViewButton/ViewButton";
import SaveButton from "../../components/SaveButton/SaveButton"
import "./searchbox.css"

function SearchBox() {
    const [books, setBooks] = useState();
    const [bookSearch, setBookSearch] = useState("");

    const handleFormSubmit = e => {
        e.preventDefault();
        API.getGoogleBook(bookSearch)
            .then(res => {
                setBooks(res.data.items);
                console.log(res.data.items)
            })
            .catch(err => console.log(err));
    };

    function handleBookSave({ id, title, author, description, link, image }) {
        console.log(id, title, author, description, link, image)
        API.saveBook({
            title: title,
            author: author,
            description: description,
            link: link,
            image: image,
            id: id
        },
            console.log("saved book from API")
        )
            .catch(err => console.log(err));
    };

    return (
        <div class="saveHeader">
            <div id='anchor' class="jumbotron" style={{ textAlign: 'center', background: 'none', marginTop: '50px' }}>
                <h1>(React) Google Books Search
           </h1>
                <h3>
                    Search for and Save Books of Interest
           </h3>
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <form onSubmit={handleFormSubmit} type="submit">
                        <input onChange={e => setBookSearch(e.target.value)} id="searchBox" placeholder="Search for a Book">
                        </input>
                        <SearchButton />
                    </form>
                </div>
            </div>
            <div id='container' style={{ background: 'none' }} >
                <ul id='results' style={{ listStyleType: 'none', background: 'none' }}>
                    {books ? (
                        <div style={{ background: 'none' }}>
                            {books.map(result =>
                                <li data-aos="fade-up"
                                    // data-aos-offset="200"
                                    // data-aos-delay="50"
                                    // data-aos-duration="1000"
                                    data-aos-easing="ease-in-out-back"
                                    // data-aos-mirror="true"
                                    data-aos-once="false"
                                    data-aos-anchor="#anchor"
                                    data-aos-anchor-placement="center-bottom" class='show' key={result.id} >
                                    <div className="card" style={{ border: '2px solid black', marginTop: '40px', background: 'none' }}>
                                        <div className="row">
                                            <div id="titleAuthor" className="col-md-6">
                                                <b> {result.volumeInfo.title}</b>
                                                <br />
                                                <div style={{ marginBottom: '15px' }}>written by {result.volumeInfo.authors[0]}</div>
                                            </div>
                                            <div id='button' className="col-md-6">
                                                <SaveButton
                                                    onClick={() => handleBookSave({
                                                        id: result.id, title: result.volumeInfo.title, author: result.volumeInfo.authors[0], description: result.volumeInfo.description, link: result.volumeInfo.previewLink, image: result.volumeInfo.imageLinks.thumbnail
                                                    })}
                                                />
                                                <ViewButton link={result.volumeInfo.previewLink} />
                                            </div>
                                        </div>
                                        <div id="fadeDescription" className="row">
                                            <div className="col-md-2">{result.volumeInfo.imageLinks ? (
                                                <img style={{ height: "160px", width: '110px' }} src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} />
                                            ) : (
                                                    <p>No Image</p>
                                                )}</div>
                                            <div id="description" className="col-md-10" style={{ height: "160px", overflowY: 'scroll', }}>{result.volumeInfo.description}</div>
                                        </div>
                                    </div>
                                    {/* key={result.id}
                                    title={result.volumeInfo.title}
                                    author={result.volumeInfo.authors[0]}

                                    description={result.volumeInfo.description}
                                    image={result.volumeInfo.imageLinks ? (
                                        <img src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} />
                                    ) : (
                                            <p>No Image</p>
                                        )}
                                    
                                    <ViewButton link={result.volumeInfo.previewLink} />
                                    <SaveButton
                                        onClick={() => handleBookSave({
                                            id: result.id, title: result.volumeInfo.title, author: result.volumeInfo.authors[0], description: result.volumeInfo.description, link: result.volumeInfo.previewLink, image: result.volumeInfo.imageLinks.thumbnail
                                        })}
                                    /> */}
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
export default SearchBox;
