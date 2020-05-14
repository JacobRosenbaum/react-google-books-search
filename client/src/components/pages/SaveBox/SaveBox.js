import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import ResultTron from "../../ResultTron/ResultTron"


function SearchBox() {
    const [apiBook, setapiBook] = useState("");

    useEffect(() => {
        loadBooks()
      }, [])

    function loadBooks() { 
        API.getBook(apiBook)
            .then(res => {
                setapiBook(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };
    // function handleBookSave({ id, title, author, description, link, image }) {
    //     console.log(id, title, author, description, link, image)
    //     API.saveBook({
    //         title: title,
    //         author: author,
    //         description: description,
    //         link: link,
    //         image: image,
    //         id: id
    //     },
    //     console.log("saved book from API")
    //     )
    //     .then(res => loadBooks())
    //         .catch(err => console.log(err));
    // };

    return (
        <div>
        <div className="jumbotron">
            <ul>
                {apiBook ? (
                    <div>
                        {apiBook.map(result =>
                            <li id = 'results' key={result.id}>
                                <ResultTron
                                    title={result.title}
                                    author={result.author}
                                    link={result.link}
                                    description={result.link}
                                    image={result.image ? (
                                        <img src={result.image} alt={result.title} />
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
