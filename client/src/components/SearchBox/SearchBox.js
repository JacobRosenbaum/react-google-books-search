import React, { useState } from "react";
import axios from "axios";
const apiKey = 'AIzaSyAnyxFFuf-7YVSmLsPkKuvhednON5j9muI';
const url = 'https://www.googleapis.com/books/v1/volumes?q='

function SearchBox() {

    const [Books, setBooks] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        const axiosCall = axios.get(url + Books + "&key=" + apiKey)
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
            <ul>
                {Books.map(result => (
                    <li>
                        <div className="row">
                            <div className="col-md-12">{result.data.items.volumeInfo.title}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SearchBox;
