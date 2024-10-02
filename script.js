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

const myLibrary = [bookOne, bookTwo, bookThree, bookFour];

function Book(title, author, genre, pages, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(array) {
    let container = document.getElementById('cards');
    array.forEach((book) => {
        let card = document.createElement('div');
        container.appendChild(card);
        let parent = document.createElement('ul');
        card.appendChild(parent);

        let delButton = document.createElement('button');
        let readButton = document.createElement('button');
        let cardButtons = document.createElement('div');

        delButton.textContent = 'Delete';
        if (book.status === 'unread') {
            readButton.textContent = 'Read'
        } else { readButton.textContent = 'Unread' }
        card.appendChild(cardButtons)
        cardButtons.appendChild(delButton)
        cardButtons.appendChild(readButton);

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
        if (rStatus){  read = 'read'
            
        }
            else {  read = 'unread'
                
            };
            
    let newBook = new Book(title, author, genre, pages, read)
    myLibrary.push(newBook)
    addBookToLibrary(myLibrary)
    event.preventDefault();
})