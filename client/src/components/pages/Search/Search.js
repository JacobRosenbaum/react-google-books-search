import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import API from "../../utils/API"
import SearchButton from "../../SearchButton/SearchButton";
import ViewButton from "../../ViewButton/ViewButton";
import SaveButton from "../../SaveButton/SaveButton"
import "./search.css"

function Search() {
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
        <div>
            <div style={{zIndex: '5'}}>
                <Header />
            </div>
            <div style={{zIndex: '-1'}} class='searchBody'>
                <div class="jumbotron" style={{ textAlign: 'center', background: 'none', marginTop: '50px', color:'white' }}>
                    <h1> <span class="text_1"> Google Books Search </span>
           </h1>
                    <h3>
                        Search for and Save Books of Interest
           </h3>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <form onSubmit={handleFormSubmit} type="submit">
                            <input class = "input" style={{textAlign: 'center', height: '35px', fontFamily: 'Noto Sans JP sans-serif', background: 'none', color:'white', border:'white 2.2px solid'}} onChange={e => setBookSearch(e.target.value)} id="searchBox" placeholder="Search for a Book" placeholderTextColor= 'white'>
                            </input>
                            <SearchButton />
                        </form>
                    </div>
                </div>
                <div id='container' style={{ background: 'none', color: 'white' }} >
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
                                        // data-aos-anchor="#anchor"
                                        data-aos-anchor-placement="center-bottom" class='show' key={result.id} >
                                        <div className="card" style={{ border: 'none', marginTop: '40px', background: 'none' }}>
                                            <div className="row">
                                                <div id="titleAuthor" className="col-md-6">
                                                    <b style={{fontSize: '21px'}}> {result.volumeInfo.title}</b>
                                                    <br />
                                                    <div style={{ marginBottom: '15px', fontSize: '17px' }}>written by {result.volumeInfo.authors[0]}</div>
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
                                                <div id="description" className="col-md-10" style={{ height: "160px", overflowY: 'scroll', fontSize: '16px'}}>{result.volumeInfo.description}</div>
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
            </div>
        </div >
    )
}
export default Search;
