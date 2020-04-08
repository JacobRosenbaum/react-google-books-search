import React, { useState } from "react";
import axios from "axios";
const apiKey = 'AIzaSyAnyxFFuf-7YVSmLsPkKuvhednON5j9muI';
const url = 'https://www.googleapis.com/books/v1/volumes?q='

function SearchBox() {
    const [books, setBooks] = useState();
    const handleSubmit = e => {
        e.preventDefault();
        axios.get(url + books + "&key=" + apiKey)
            .then(res => {
                console.log(res)
                setBooks(res.data.items);
            })
            .catch(err => console.log(err));
    };
    return (
        <div class="jumbotron" style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit} type="submit">
                <input onChange={e => setBooks(e.target.value)} id="searchBox" placeholder="Search for a Book">
                </input>
                <button id="searchButton" type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}
export default SearchBox;
