import React, { useState } from "react";
import API from "../../utils/API";
import ResultTron from "../../ResultTron/ResultTron"


function SearchBox() {
    const [apiBook, setapiBook] = useState("");

    const handeleAPILoad = e => {
        e.preventDefault();
        API.getBook(apiBook)
            .then(res => {
                setapiBook(res.data.items);
                console.log(res.data.items)
            })
            .catch(err => console.log(err));
    };

    function getAPIBook({ id, title, author, description, link, image }) {
        console.log(id, title, author, description, link, image)
        API.getBook({
            title: title,
            author: author,
            description: description,
            link: link,
            image: image,
            id: id
        },
        console.log("retrieved book from API")
        )
            .catch(err => console.log(err));
    };

    return (
        <div>
        <div className="jumbotron" onLoad = {{handeleAPILoad}}>
            <ul>
                {apiBook ? (
                    <div>
                        {apiBook.map(result =>
                            <li id = 'results' key={result.id}>
                                <ResultTron
                                    key={result.id}
                                    title={result.volumeInfo.title}
                                    author={result.volumeInfo.authors[0]}
                                    link={result.volumeInfo.previewLink}
                                    description={result.volumeInfo.description}
                                    image={result.volumeInfo.imageLinks ? (
                                        <img src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} />
                                    ) : (
                                            <p>No Image</p>
                                        )}
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
