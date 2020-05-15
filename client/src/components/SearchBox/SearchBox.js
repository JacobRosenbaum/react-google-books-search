import React, { useState } from "react";
import API from "../utils/API";
import SearchButton from "../SearchButton/SearchButton";
import SaveButton from "../SaveButton/SaveButton";
import ResultTron from "../ResultTron/ResultTron";
import ViewButton from "../ViewButton/ViewButton"
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
        <div>
            <div className="jumbotron" style={{ textAlign: 'center', backgroundColor: "white" }}>
                <form onSubmit={handleFormSubmit} type="submit">
                    <input onChange={e => setBookSearch(e.target.value)} id="searchBox" placeholder="Search for a Book">
                    </input>
                    <SearchButton />
                </form>
            </div>
            <div className="jumbotron" style = {{backgroundColor: "white"}}>
                <ul style = {{listStyleType: 'none'}}>
                    {books ? (
                        <div>
                            {books.map(result =>
                                <li id = 'results' key={result.id} >
                                    <ResultTron
                                        key={result.id}
                                        title={result.volumeInfo.title}
                                        author={result.volumeInfo.authors[0]}
                                        
                                        description={result.volumeInfo.description}
                                        image={result.volumeInfo.imageLinks ? (
                                            <img src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} />
                                        ) : (
                                                <p>No Image</p>
                                            )}
                                    />
                                    <ViewButton link={result.volumeInfo.previewLink}/>
                                    <SaveButton 
                                        onClick={() => handleBookSave({
                                            id: result.id, title: result.volumeInfo.title, author: result.volumeInfo.authors[0], description: result.volumeInfo.description, link: result.volumeInfo.previewLink, image: result.volumeInfo.imageLinks.thumbnail
                                        })}
                                    />
                                </li>
                            )
                            }
                        </div>
                    ) : (
                            <h3></h3>
                        )}
                </ul>
            </div>
        </div>
    )
}
export default SearchBox;
