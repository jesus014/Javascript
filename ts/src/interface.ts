interface Book{
    id: number;
    title: string;
    author: string;
    coAutor?: string;    
    //se puede declarar metodos
    isLoan?:(id:number) => void;
}
//contrato de codigo book:Book
const book: Book = {
    id: 1,
    title: 'asendio y tormenta',
    author:'as'
};


function getBook():Book {
    return {id:1,title: 'asendio', author: 'as'};
}

const myBook= getBook();

myBook.id

function creaateBook(book:Book):Book {
    return book;
}

const newBook:Book ={
    id:1,
    title:'asendio', 
    author:'21'
}
creaateBook(newBook);