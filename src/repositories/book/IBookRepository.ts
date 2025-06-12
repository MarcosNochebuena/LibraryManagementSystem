import { Book } from "../../models/Book";
import { IBaseRepository } from "../IBaseRepository";

/**
 * Interfaz para el repositorio de libros.
 * Extiende las operaciones CRUD básicas y agrega métodos específicos para la gestión de libros.
 */
export interface IBookRepository extends IBaseRepository<Book> {
  /**
   * Obtiene todos los libros escritos por un autor específico.
   * @param {string} author - Nombre del autor cuyos libros se desean buscar.
   * @returns {Promise<Book[]>} Una promesa que resuelve con un arreglo de libros del autor especificado.
   */
  getBooksByAuthor(author: string): Promise<Book[]>;

  /**
   * Busca un libro por su título.
   * @param {string} title - Título del libro a buscar.
   * @returns {Promise<Book | null>} Una promesa que resuelve con el libro encontrado o null si no existe.
   */
  getBookByTitle(title: string): Promise<Book | null>;

  /**
   * Busca un libro por su ISBN.
   * @param {string} isbn - Código ISBN del libro a buscar.
   * @returns {Promise<Book | null>} Una promesa que resuelve con el libro encontrado o null si no existe.
   */
  getBookByISBN(isbn: string): Promise<Book | null>;

  /**
   * Obtiene todos los libros publicados en un año específico.
   * @param {number} year - Año de publicación de los libros a buscar.
   * @returns {Promise<Book[]>} Una promesa que resuelve con un arreglo de libros publicados en el año indicado.
   */
  getBooksByYear(year: number): Promise<Book[]>;
}

