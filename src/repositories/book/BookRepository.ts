import { Connection } from "mysql2/promise";
import { DatabaseConnection } from "../../config/DatabaseConnection";
import { Book } from "../../models/Book";
import { IBookRepository } from "./IBookRepository";

export class BookRepository implements IBookRepository {
  private connection: Connection | null;
  constructor(){
    this.connection = DatabaseConnection.getInstance().getConnection();
  }

  // Add methods for interacting with the book data
  public getAll(): Promise<Book[]>{
    if (!this.connection) throw new Error("No hay conexión a la base de datos");
    console.log("Obteniendo datos de la BD");
    const books: Book[] = [
      new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0"),
      new Book("Night Flight", "Antoine de Saint-Exupéry", "978-0-15-601398-7")
    ];
    return Promise.resolve(books);
  }

  public getById(id: string): Promise<Book | null> {
    console.log("Obteniendo libro por ID:", id);
    const book = new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0");
    return Promise.resolve(book);
  }

  public add(book: Book): Promise<void> {
    console.log("Añadiendo libro:", book);
    // Aquí se añadiría la lógica para guardar el libro en la base de datos
    return Promise.resolve();
  }

  public update(id: string, updatedBook: Book): Promise<void> {
    console.log("Actualizando libro con ID:", id, "a", updatedBook);
    // Aquí se añadiría la lógica para actualizar el libro en la base de datos
    return Promise.resolve();
  }

  public delete(id: string): Promise<void> {
    console.log("Eliminando libro con ID:", id);
    // Aquí se añadiría la lógica para eliminar el libro de la base de datos
    return Promise.resolve();
  }

  public getBooksByAuthor(author: string): Promise<Book[]> {
    console.log("Obteniendo libros por autor:", author);
    const books: Book[] = [
      new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0"),
      new Book("Night Flight", "Antoine de Saint-Exupéry", "978-0-15-601398-7")
    ];
    return Promise.resolve(books);
  }

  public getBookByTitle(title: string): Promise<Book | null> {
    console.log("Obteniendo libro por título:", title);
    const book = new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0");
    return Promise.resolve(book);
  }

  public getBookByISBN(isbn: string): Promise<Book | null> {
    console.log("Obteniendo libro por ISBN:", isbn);
    const book = new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0");
    return Promise.resolve(book);
  }

  public getBooksByYear(year: number): Promise<Book[]> {
    console.log("Obteniendo libros por año:", year);
    const books: Book[] = [
      new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0"),
      new Book("Night Flight", "Antoine de Saint-Exupéry", "978-0-15-601398-7")
    ];
    return Promise.resolve(books);
  }
}
