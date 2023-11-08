// 1. when user refreshes page, cards should still be there
// 2. Ability to remove books, 
// 3. edit books


import { library } from "./library.js";
import { libraryStorage } from "./libraryStorage.js";

// gets imported array of books, ie the library
let books  = library.books;

// storage memory system
let storedBooks = libraryStorage.storeBooks;
let retrievedBooks = libraryStorage.retrievedBooks;
storedBooks;



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

let selectBookCardsContainer = document.querySelector(".books__card")

function addBook(){
    authorValue = getFormAuthor.value;
    pagesValue = getFormPages.value;
    pagesReadValue = getFormPagesRead.value;
    readStatusValue = getFormReadStatus.value;
    titleValue = getFormTitle.value;
    createBookCard();

}

let paragraph ;

function createBookCard(){
    let div = document.createElement("div")
    paragraph = document.createElement("p");
    console.log(titleValue);
    paragraph.textContent = ` Title :${titleValue} Author: ${authorValue} Pages: ${pagesValue} Pages Read: ${pagesReadValue} Read Status: ${readStatusValue} `;
    div.classList.add("book__card")
    div.append(paragraph);
    selectBookCardsContainer.append(div);
    
};

btn.addEventListener("click", () =>{
    addBook();
    books.push(new createBook(authorValue,pagesValue,pagesReadValue,readStatusValue, titleValue));
})






