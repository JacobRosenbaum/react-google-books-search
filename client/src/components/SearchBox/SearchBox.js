import React, { useState } from "react";
import API from "../utils/API";
import SearchButton from "../SearchButton/SearchButton";
import TitleTron from "../TitleTron/TitleTron";
import SaveButton from "../SaveButton/Savebutton";
import ResultTron from "../ResultTron/ResultTron";

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
        console.log("saved book motherfucker")
        )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="jumbotron" style={{ textAlign: 'center' }}>
                <form onSubmit={handleFormSubmit} type="submit">
                    <input onChange={e => setBookSearch(e.target.value)} id="searchBox" placeholder="Search for a Book">
                    </input>
                    <SearchButton />
                </form>
            </div>
            <div className="jumbotron">
                <ul>
                    {books ? (
                        <div>
                            {books.map(result =>
                                <div key={result.id}>
                                    <ResultTron
                                        key={result.id}
                                        title={result.volumeInfo.title}
                                        author={result.volumeInfo.authors}
                                        description={result.volumeInfo.description}
                                        link={result.volumeInfo.previewLink}
                                        image={result.volumeInfo.imageLinks ? (
                                            <img src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} />
                                        ) : (
                                                <p>No Image</p>
                                            )}
                                    />
                                    <SaveButton
                                        onClick={() => handleBookSave({
                                            id: result.id, title: result.volumeInfo.title, author: result.volumeInfo.authors[0], description: result.volumeInfo.description, link: result.volumeInfo.previewLink, image: result.volumeInfo.imageLinks.thumbnail
                                        })}
                                    />
                                </div>
                            )
                            }
                        </div>
                    ) : (
                            <h3>Results</h3>
                        )}
                </ul>
            </div>
        </div>
    )
}
export default SearchBox;
