let myLibrary = [];
var index = 0;
const bookContainer = document.querySelector('#book-container');
const addBookBtn = document.querySelector('#addBook');
const addBookForm = document.querySelector('.add-new-book');
const submitNewBook = document.querySelector('#add-book');

var book1 = new Book('a',123,123);
var book2 = new Book('b',13,123);
var book3 = new Book('c',12,1);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

submitNewBook.addEventListener('click', ()=>{
    //get input values from form
    let newBookTitle = document.querySelector('#title').value;
    let newBookAuthor = document.querySelector('#author').value;
    let newBookPages = document.querySelector('#pages').value;
    let newBookRead = document.querySelector('#radio-yes');
    let newBookForm = document.querySelector('#newBookForm');
    // create new book
    var newBook = new Book(newBookTitle,newBookAuthor,newBookPages);
    newBook.read = (newBookRead.checked) ? true : false; 
    addBookToLibrary(newBook);
    newBookForm.reset();
    addBookForm.style.display = 'none';
    addBookBtn.style.display = 'flex';
    
})

addBookBtn.addEventListener('click', ()=>{
    addBookBtn.style.display = 'none';
    addBookForm.style.display = 'flex';
});



function Book(title, author, pages){
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.read = false;
} 

function addBookToLibrary(book){
    myLibrary.push(book);
    updateLibrary(book);
}

function updateLibrary(book){
    // create a card for each book in the list
    const card = createCard(book);
    bookContainer.prepend(card);
   
}

function refreshLibrary(){
    let cards = document.querySelectorAll('#book'); 
    cards.forEach(book => {
        book.parentElement.removeChild(book);
    });

    index = 0;
    for (let index = 0; index < myLibrary.length; index++) {
        const book = myLibrary[index];
        updateLibrary(book);
    }

}

function createCard(book){
    let pos = index;
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const remove = document.createElement("button");
    remove.textContent = "Remove";

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    remove.addEventListener('click',()=>{
        myLibrary.splice(pos,1);
        refreshLibrary();
    })
    card.appendChild(remove);
    card.setAttribute("class","book");
    card.setAttribute("id","book");
    
    index++;
    return card;
}


