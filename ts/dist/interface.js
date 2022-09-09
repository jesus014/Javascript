"use strict";
//contrato de codigo book:Book
const book = {
    id: 1,
    title: 'asendio y tormenta',
    author: 'as'
};
function getBook() {
    return { id: 1, title: 'asendio', author: 'as' };
}
const myBook = getBook();
myBook.id;
function creaateBook(book) {
    return book;
}
const newBook = {
    id: 1,
    title: 'asendio',
    author: '21'
};
creaateBook(newBook);
