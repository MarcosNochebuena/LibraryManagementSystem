import { isNumber, isString, validate } from "class-validator";
import { Book } from "../models/Book";
import { BookRepository } from "../repositories/book/BookRepository";

/**
 * Servicio para gestionar libros en la biblioteca.
 * Proporciona métodos para crear, consultar, actualizar y eliminar libros,
 * así como búsquedas y validaciones relacionadas.
 */
export class BookService {
  private bookRepository: BookRepository = new BookRepository();
  constructor(){}

  /**
   * Crea un nuevo libro después de validar los datos.
   * @param book - Objeto Book a agregar
   * @throws Error si los datos del libro no son válidos
   */
  public async create(book: Book): Promise<void>{
    await this.validateBook(book);
    return await this.bookRepository.add(book);
  }

  /**
   * Obtiene todos los libros registrados.
   * @returns Lista de libros
   */
  public async getAll(): Promise<Book[]>{
    return await this.bookRepository.getAll();
  }

  /**
   * Busca un libro por su ID.
   * @param id - ID del libro
   * @returns El libro encontrado o null si no existe
   * @throws Error si el ID no es válido
   */
  public async getById(id: string): Promise<Book | null> {
    await this.validateId(id);
    return await this.bookRepository.getById(id);
  }

  /**
   * Actualiza un libro existente después de validar los datos.
   * @param id - ID del libro a actualizar
   * @param book - Objeto Book con los nuevos datos
   * @throws Error si el ID o los datos del libro no son válidos
   */
  public async update(id: string, book: Book): Promise<void>{
    await this.validateId(id);
    await this.validateBook(book);
    return await this.bookRepository.update(id, book);
  }

  /**
   * Elimina un libro por su ID.
   * @param id - ID del libro a eliminar
   * @throws Error si el ID no es válido
   */
  public async destroy(id: string): Promise<void>{
    await this.validateId(id);
    await this.bookRepository.delete(id);
  }

  /**
   * Busca todos los libros de un autor específico.
   * @param author - Nombre del autor
   * @returns Lista de libros del autor
   * @throws Error si el nombre del autor no es válido
   */
  public async getBooksByAuthor(author: string): Promise<Book[]> {
    if(!isString(author)){
      throw new Error("Author invalido");
    }
    return this.bookRepository.getBooksByAuthor(author);
  }

  /**
   * Busca todos los libros publicados en un año específico.
   * @param year - Año de publicación
   * @returns Lista de libros publicados ese año
   * @throws Error si el año no es válido
   */
  public async getBooksByYear(year: number): Promise<Book[]> {
    if(!isNumber(year)){
      throw new Error("Año invalido");
    }
    return this.bookRepository.getBooksByYear(year)
  }

  /**
   * Busca un libro por su ISBN.
   * @param isbn - ISBN del libro
   * @returns El libro encontrado o null si no existe
   * @throws Error si el ISBN no es válido
   */
  public async getBookByISBN(isbn: string): Promise<Book | null> {
    if(!isString(isbn)){
      throw new Error("ISBN invalido");
    }
    return this.bookRepository.getBookByISBN(isbn);
  }

  /**
   * Busca un libro por su título.
   * @param title - Título del libro
   * @returns El libro encontrado o null si no existe
   * @throws Error si el título no es válido
   */
  public async getBookByTitle(title: string): Promise<Book | null> {
    if(!isString(title)){
      throw new Error("Titulo invalido");
    }
    return this.bookRepository.getBookByTitle(title)
  }

  /**
   * Valida los datos de un libro usando class-validator.
   * @param book - Objeto Book a validar
   * @throws Error si los datos no son válidos
   */
  public async validateBook(book: Book): Promise<void>{
    const errors = await validate(book);
    if (errors.length > 0) {
      throw new Error("Datos inválidos: " + errors.map(e => e.toString()).join(", "));
    }
  }

  /**
   * Valida que el ID sea un string y un número válido.
   * @param id - ID a validar
   * @throws Error si el ID no es válido
   */
  public async validateId(id: string | number): Promise<void>{
    if (!isNumber(id) || !isString(id)) {
      throw new Error("Id invalido")
    }
  }

}
