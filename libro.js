//#20
class Book{
    constructor(titulo, autor, anio, genero){

        this.titulo =  titulo
        this.autor = autor
        this.anio = anio
        this.genero = genero
        
    }

    //metodo que regresa autor
    getAutor(){
        return this.autor
    }

    getGenero(){
        return this.genero
    }
       
    bookInfo(){
        return `${this.titulo} es un libro del autor ${this.autor} 
                escrito en el año ${this.anio} de genero ${this.genero}`
    }
}

let books = [];

 while(books.length < 3){
     let title = prompt('Introduce titulo de libro');
     let autor = prompt('Introduce nombre del autor');
     let year = prompt('Introduce año de publicacion del libro');
     let gender = prompt('Escribe nombre del género').toLowerCase();

     if(title != '' && 
        autor != '' && 
        !isNaN(year) && year.length == 4 &&  (gender == 'aventura' ||
        gender == 'drama' || gender == 'terror' || gender == 'fantasia')){

            books.push(new Book (title, autor, year, gender))

        }
 }

 const showAllBooks = () =>{
        console.log(books);
 }

 //showAllBooks()

 const showAllAutor = () => {
     let autores = [];

     for (const book of books){
         autores.push(book.getAutor());
     }

    console.log(autores.sort()); 
 }

 //showAllAutor()

 const showGenero = () => {
     let gener = prompt('Escribe el genero a mostrar');

    for(const genero of books){
        if(genero.getGenero() === gener){
            console.log(genero.bookInfo());
        }
    }

 }

 showGenero ()