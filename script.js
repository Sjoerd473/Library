let bookOne = {
    title: 'BookTitle',
    author: 'Writer',
    genre: 'Exciting',
    pages: '50000',
    status: 'unread'
}

let bookTwo = {
    title: 'BookTitle',
    author: 'Writer',
    genre: 'Exciting',
    pages: '50000',
    status: 'unread'
}

let bookThree = {
    title: 'BookTitle',
    author: 'Writer',
    genre: 'Exciting',
    pages: '50000',
    status: 'unread'
}

let bookFour = {
    title: 'BookTitle',
    author: 'Writer',
    genre: 'Exciting',
    pages: '50000',
    status: 'read'
}

const myLibrary = [];

function Book(title, author, genre, pages, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.status = status;
}

Book.prototype.changeRead = function(){


    if(this.status === 'Read'){ this.status = 'Unread'}
    else if (this.status === 'Unread') {this.status = 'Read'};
}



function addBookToLibrary(array) {
    let container = document.getElementById('cards');
    container.replaceChildren();
    let bookNumber = 0;
    array.forEach((book) => {
        let card = document.createElement('div');
        card.dataset.book = `${bookNumber}`;
        
        container.appendChild(card);
        let parent = document.createElement('ul');
        card.appendChild(parent);

        let delButton = document.createElement('button');
        let readButton = document.createElement('button');
        let cardButtons = document.createElement('div');

        delButton.textContent = 'Delete';
        delButton.dataset.book = `${bookNumber}`;
        if (book.status === 'Unread') {
            readButton.textContent = 'Read'
        } else { readButton.textContent = 'Unread' }
        readButton.dataset.book = `${bookNumber}`;
        card.appendChild(cardButtons)
        cardButtons.appendChild(delButton)
        cardButtons.appendChild(readButton);

        delButton.addEventListener('click', deleteBook);
        readButton.addEventListener('click', changeThing );

        bookNumber++
        let itemOne = document.createElement('li')
        let itemTwo = document.createElement('li')
        let itemThree = document.createElement('li')
        let itemFour = document.createElement('li')
        let itemFive = document.createElement('li')

        itemOne.textContent = 'Title: ' + book.title;
        parent.appendChild(itemOne);

        itemTwo.textContent = 'Author: ' + book.author;
        parent.appendChild(itemTwo);

        itemThree.textContent = 'Genre: ' + book.genre;
        parent.appendChild(itemThree);

        itemFour.textContent = 'Number of pages: ' + book.pages;
        parent.appendChild(itemFour);

        itemFive.textContent = 'Read or unread? ' + book.status;
        parent.appendChild(itemFive);

    })
}

const dialog = document.querySelector('dialog');
const closeButton = document.querySelector("dialog button");



bookButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

const submitButton = document.querySelector('#confirm')

submitButton.addEventListener('click', (event) => {
    let title = document.querySelector('input[name="book_title"]').value
    let author = document.querySelector('input[name="author"]').value
    let genre = document.querySelector('input[name="genre"]').value
    let pages = document.querySelector('input[name="page_count"]').value
    let rStatus = document.getElementById('reading_status').checked
    let read;
        if (rStatus){  read = 'Read'
            
        }
            else {  read = 'Unread'
                
            };
            
    const bloop = new Book(title, author, genre, pages, read)
    
    
    bloop.position = myLibrary.push(bloop) - 1
    addBookToLibrary(myLibrary)
    event.preventDefault();
    dialog.close();
    
})

function deleteBook(e){
    let card = e.target.parentNode.parentNode;
    myLibrary.splice(card.dataset.book,1);
    card.remove();
}

function changeThing(e){
    let book = myLibrary[e.target.dataset.book]
    book.changeRead();
    console.log(book);
   let text = e.target.parentElement.parentElement.firstChild.lastChild
    if(book.status === 'Read'){
        e.target.textContent = 'Unread'
        text.textContent = 'Read or unread? Read'
    } else if (book.status === 'Unread'){
        e.target.textContent = 'Read'
        text.textContent = 'Read or unread? Unread'
    }

}