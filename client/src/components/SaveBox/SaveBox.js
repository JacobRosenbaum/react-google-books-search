import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ResultTron from "../ResultTron/ResultTron";
import DeleteButton from "../DeleteButton/DeleteButton"


function SaveBox() {
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

    function deleteBook(id) {
        API.deleteBook(id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }

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
                                    description={result.description}
                                    image={result.image ? (
                                        <img src={result.image} alt={result.title} />
                                    ) : (
                                            <p>No Image</p>
                                        )}
                                />
                                <DeleteButton onClick = {{deleteBook}}
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
export default SaveBox;
