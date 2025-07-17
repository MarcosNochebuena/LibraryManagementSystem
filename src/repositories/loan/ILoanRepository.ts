import { Loan } from "../../models/Loan";
import { IBaseRepository } from "../IBaseRepository";

/**
 * Interfaz para el repositorio de préstamos.
 * Extiende las operaciones CRUD básicas y agrega métodos específicos para la gestión de préstamos de libros.
 */
export interface ILoanRepository extends IBaseRepository<Loan> {
  /**
   * Busca todos los préstamos realizados por un usuario específico.
   * @param {string} userId - Identificador único del usuario.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos realizados por el usuario.
   */
  findLoansByUserId(userId: string): Promise<Loan[]>;

  /**
   * Busca todos los préstamos asociados a un libro específico.
   * @param {string} bookId - Identificador único del libro.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos asociados al libro.
   */
  findLoansByBookId(bookId: string): Promise<Loan[]>;

  /**
   * Busca todos los préstamos realizados en un rango de fechas determinado.
   * @param {Date} startDate - Fecha de inicio del rango.
   * @param {Date} endDate - Fecha de fin del rango.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos en el rango de fechas.
   */
  findLoansByDateRange(startDate: Date, endDate: Date): Promise<Loan[]>;

  /**
   * Busca todos los préstamos realizados en una fecha específica de préstamo.
   * @param {Date} borrowDate - Fecha en la que se realizó el préstamo.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos realizados en la fecha indicada.
   */
  findLoansByBorrowDate(borrowDate: Date): Promise<Loan[]>;

  /**
   * Busca todos los préstamos que fueron devueltos en una fecha específica.
   * @param {Date} returnDate - Fecha de devolución del préstamo.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos devueltos en la fecha indicada.
   */
  findLoansByReturnDate(returnDate: Date): Promise<Loan[]>;
}
