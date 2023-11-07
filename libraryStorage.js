import { library } from "./library.js";


let books  = library.books;

let storeBooks =  window.localStorage.setItem("storeBooks",console.log(books));


let retrievedBooks = window.localStorage.getItem("storeBooks");


export let libraryStorage ={
    storeBooks,
    retrievedBooks,
}

