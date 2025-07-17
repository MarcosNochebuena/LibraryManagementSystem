import { AppDataSource } from "../../config/AppDataSource";
import { Book } from "../../models/Book";
import { IBookRepository } from "./IBookRepository";
import { Repository } from "typeorm";

export class BookRepository implements IBookRepository {
  private connection: AppDataSource | null;
  private repository: Repository<Book>;
  /**
   * Inicializa una nueva instancia del repositorio de libros y establece la conexión a la base de datos.
   */
  constructor(){
    this.connection = AppDataSource.getInstance();
    this.repository = this.connection.getDataSource().getRepository(Book);
  }

  /**
   * Método para listar todos los libros.
   * @returns Arreglo de libros.
   */
  public async getAll(): Promise<Book[]> {
    this.validateConnection();
    console.log("Obteniendo datos de la BD");
    return await this.repository.find();
  }

  /**
   * Busca un libro por su identificador único.
   * @param {string} id - Identificador único del libro a buscar.
   * @returns {Promise<Book | null>} Una promesa que resuelve con el libro encontrado o null si no existe.
   */
  public async getById(id: string): Promise<Book | null > {
    this.validateConnection();
    console.log("Obteniendo libro por ID:", id);
    return await this.repository.findOneBy({ id });
  }

  /**
   * Agrega un nuevo libro a la base de datos.
   * @param {Book} book - El libro que se va a agregar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public async add(book: Book): Promise<void> {
    this.validateConnection();
    console.log("Añadiendo libro:", book);
    await this.repository.save(book);
  }

  /**
   * Actualiza la información de un libro existente.
   * @param {string} id - Identificador único del libro a actualizar.
   * @param {Book} updatedBook - La nueva información del libro.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public async update(id: string, updatedBook: Book): Promise<void> {
    this.validateConnection();
    console.log("Actualizando libro con ID:", id, "a", updatedBook);
    const book = await this.getById(id);
    if (!book) throw new Error("Libro no encontrado");
    await this.repository.update(id, updatedBook);
  }

  /**
   * Elimina un libro de la base de datos por su identificador.
   * @param {string} id - Identificador único del libro a eliminar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public async delete(id: string): Promise<void> {
    this.validateConnection();
    console.log("Eliminando libro con ID:", id);
    const book = await this.getById(id);
    if (!book) throw new Error("Libro no encontrado");
    await this.repository.delete(id);
  }

  /**
   * Obtiene todos los libros escritos por un autor específico.
   * @param {string} author - Nombre del autor cuyos libros se desean buscar.
   * @returns {Promise<Book[]>} Una promesa que resuelve con un arreglo de libros del autor especificado.
   */
  public async getBooksByAuthor(author: string): Promise<Book[]> {
    this.validateConnection();
    console.log("Obteniendo libros por autor:", author);
    return await this.repository.find({ where: { author: author } as any });
  }

  /**
   * Busca un libro por su título.
   * @param {string} title - Título del libro a buscar.
   * @returns {Promise<Book | null>} Una promesa que resuelve con el libro encontrado o null si no existe.
   */
  public async getBookByTitle(title: string): Promise<Book | null> {
    this.validateConnection();
    console.log("Obteniendo libro por título:", title);
    return await this.repository.findOne({ where: { title: title } as any });
  }

  /**
   * Busca un libro por su ISBN.
   * @param {string} isbn - Código ISBN del libro a buscar.
   * @returns {Promise<Book | null>} Una promesa que resuelve con el libro encontrado o null si no existe.
   */
  public async getBookByISBN(isbn: string): Promise<Book | null> {
    this.validateConnection();
    console.log("Obteniendo libro por ISBN:", isbn);
    return await this.repository.findOne({ where: { isbn: isbn } as any });
  }

  /**
   * Obtiene todos los libros publicados en un año específico.
   * @param {number} year - Año de publicación de los libros a buscar.
   * @returns {Promise<Book[]>} Una promesa que resuelve con un arreglo de libros publicados en el año indicado.
   */
  public async getBooksByYear(year: number): Promise<Book[]> {
    this.validateConnection();
    console.log("Obteniendo libros por año:", year);
    return await this.repository.find({ where: { year: year } as any });
  }

  /**
   * Obtiene todos los libros actualmente prestados por un usuario específico.
   * @param {string} userId - Identificador único del usuario.
   * @returns {Promise<User[]>} Una promesa que resuelve con un arreglo de usuarios que tienen libros prestados (puede incluir detalles de los libros).
   */
  public async getBorrowBooksByUserId(userId: string): Promise<Book[]> {
    console.log("Obteniendo libros prestados al user ID:", userId);
    // Implementation for getting borrowed books by user ID
    return await this.repository.find({ where: {userId: userId} as any });
  }

  /**
   * Valida que exista conexión a la base de datos
   */
  private validateConnection(){
     if (!this.connection) throw new Error("No hay conexión a la base de datos");
  }
}
