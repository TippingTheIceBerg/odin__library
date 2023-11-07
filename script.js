import { library } from "./library.js";
import { libraryStorage } from "./libraryStorage.js";

// gets imported array of books, ie the library
let books  = library.books;

// storage memory system
let storedBooks = libraryStorage.storeBooks;
let retrievedBooks = libraryStorage.retrievedBooks;
storedBooks;

retrievedBooks!= ""? console.log("no books"): console.log("some books");

// gets html form values
let getFormTitle = document.querySelector(".title");
let getFormAuthor = document.querySelector(".author");
let getFormPages = document.querySelector(".pages");
let getFormReadStatus = document.querySelector(".readStatus");
let getFormPagesRead = document.querySelector(".pagesRead");

let btn = document.querySelector(".form__btn");

// creates books
function createBook (author, pages, pagesRead, readStatus,title){
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead;
    this.title = title;
    this.readStatus = readStatus;
}


let authorValue;
let  pagesValue;
let pagesReadValue ;
let  readStatusValue;
let  titleValue;


function addBook(){
    authorValue = getFormAuthor.value;
    pagesValue = getFormPages.value;
    pagesReadValue = getFormPagesRead.value;
    readStatusValue = getFormReadStatus.value;
    titleValue = getFormTitle.value;

}


btn.addEventListener("click", () =>{
    addBook();
    books.push(new createBook(authorValue,pagesValue,pagesReadValue,readStatusValue, titleValue));
})






