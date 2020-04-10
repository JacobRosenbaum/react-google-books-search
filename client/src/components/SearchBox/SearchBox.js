import React, { useState } from "react";
import API from "../utils/API";

function SearchBox() {
    const [books, setBooks] = useState();

    const handleFormSubmit = e => {
        e.preventDefault();
        API.getGoogleBook()
            .then(res => {
                setBooks(res.data.items);
                console.log(res.data.items)
            })
            .catch(err => console.log(err));
    };

    const handleResults = e =>{
        e.preventDefault();
        
    }

    return (
        <div>
            <div className="jumbotron" style={{ textAlign: 'center' }}>
                <form onSubmit={handleFormSubmit} type="submit">
                    <input onChange={e => setBooks(e.target.value)} id="searchBox" placeholder="Search for a Book">
                    </input>
                    <button id="searchButton" type="submit">
                        Search
                </button>
                </form>
            </div>
            <div className="jumbotron">
                <h5  style={{ textAlign: 'left' }}>
                    Results
                </h5>
                <h2>

                </h2>
            </div>
        </div>
    )
}
export default SearchBox;
