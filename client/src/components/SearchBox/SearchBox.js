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

    function handleBookSave ({id, title, author, description, link, image}) {
        console.log(id, title, author, description, link, image)
    
        API.saveBook({
          title: title,
          author: author,
          description: description,
          link: link,
          image: image
        })
          .catch(err => console.log(err));
      };

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
        </div>
    )
}
export default SearchBox;
