import { Connection } from "mysql2/promise";
import { DatabaseConnection } from "../../config/DatabaseConnection";
import { Book } from "../../models/Book";
import { IBookRepository } from "./IBookRepository";

export class BookRepository implements IBookRepository {
  private connection: Connection | null;
  /**
   * Inicializa una nueva instancia del repositorio de libros y establece la conexión a la base de datos.
   */
  constructor(){
    this.connection = DatabaseConnection.getInstance().getConnection();
  }

  /**
   * Método para listar todos los libros.
   * @returns Arreglo de libros.
   */
  public getAll(): Promise<Book[]>{
    if (!this.connection) throw new Error("No hay conexión a la base de datos");
    console.log("Obteniendo datos de la BD");
    const books: Book[] = [
      new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0"),
      new Book("Night Flight", "Antoine de Saint-Exupéry", "978-0-15-601398-7")
    ];
    return Promise.resolve(books);
  }

  /**
   * Busca un libro por su identificador único.
   * @param {string} id - Identificador único del libro a buscar.
   * @returns {Promise<Book | null>} Una promesa que resuelve con el libro encontrado o null si no existe.
   */
  public getById(id: string): Promise<Book | null> {
    console.log("Obteniendo libro por ID:", id);
    const book = new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0");
    return Promise.resolve(book);
  }

  /**
   * Agrega un nuevo libro a la base de datos.
   * @param {Book} book - El libro que se va a agregar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public add(book: Book): Promise<void> {
    console.log("Añadiendo libro:", book);
    // Aquí se añadiría la lógica para guardar el libro en la base de datos
    return Promise.resolve();
  }

  /**
   * Actualiza la información de un libro existente.
   * @param {string} id - Identificador único del libro a actualizar.
   * @param {Book} updatedBook - La nueva información del libro.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public update(id: string, updatedBook: Book): Promise<void> {
    console.log("Actualizando libro con ID:", id, "a", updatedBook);
    // Aquí se añadiría la lógica para actualizar el libro en la base de datos
    return Promise.resolve();
  }

  /**
   * Elimina un libro de la base de datos por su identificador.
   * @param {string} id - Identificador único del libro a eliminar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public delete(id: string): Promise<void> {
    console.log("Eliminando libro con ID:", id);
    // Aquí se añadiría la lógica para eliminar el libro de la base de datos
    return Promise.resolve();
  }

  /**
   * Obtiene todos los libros escritos por un autor específico.
   * @param {string} author - Nombre del autor cuyos libros se desean buscar.
   * @returns {Promise<Book[]>} Una promesa que resuelve con un arreglo de libros del autor especificado.
   */
  public getBooksByAuthor(author: string): Promise<Book[]> {
    console.log("Obteniendo libros por autor:", author);
    const books: Book[] = [
      new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0"),
      new Book("Night Flight", "Antoine de Saint-Exupéry", "978-0-15-601398-7")
    ];
    return Promise.resolve(books);
  }

  /**
   * Busca un libro por su título.
   * @param {string} title - Título del libro a buscar.
   * @returns {Promise<Book | null>} Una promesa que resuelve con el libro encontrado o null si no existe.
   */
  public getBookByTitle(title: string): Promise<Book | null> {
    console.log("Obteniendo libro por título:", title);
    const book = new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0");
    return Promise.resolve(book);
  }

  /**
   * Busca un libro por su ISBN.
   * @param {string} isbn - Código ISBN del libro a buscar.
   * @returns {Promise<Book | null>} Una promesa que resuelve con el libro encontrado o null si no existe.
   */
  public getBookByISBN(isbn: string): Promise<Book | null> {
    console.log("Obteniendo libro por ISBN:", isbn);
    const book = new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0");
    return Promise.resolve(book);
  }

  /**
   * Obtiene todos los libros publicados en un año específico.
   * @param {number} year - Año de publicación de los libros a buscar.
   * @returns {Promise<Book[]>} Una promesa que resuelve con un arreglo de libros publicados en el año indicado.
   */
  public getBooksByYear(year: number): Promise<Book[]> {
    console.log("Obteniendo libros por año:", year);
    const books: Book[] = [
      new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0"),
      new Book("Night Flight", "Antoine de Saint-Exupéry", "978-0-15-601398-7")
    ];
    return Promise.resolve(books);
  }
}
