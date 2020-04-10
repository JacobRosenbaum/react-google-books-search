import axios from "axios";
const apiKey = 'AIzaSyAnyxFFuf-7YVSmLsPkKuvhednON5j9muI';

export default {
  getGoogleBook: function(bookSearch) {
      console.log(bookSearch);
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`)
  },
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  saveBook: function(bookInfo) {
    console.log(bookInfo)
    return axios.post("/api/books", bookInfo);
  },
 
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  
};