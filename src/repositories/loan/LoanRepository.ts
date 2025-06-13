import { Connection } from "mysql2/promise";
import { DatabaseConnection } from "../../config/DatabaseConnection";
import { Book } from "../../models/Book";
import { Loan } from "../../models/Loan";
import { User } from "../../models/User";
import { ILoanRepository } from "./ILoanRepository";

export class LoanRepository implements ILoanRepository{
  private connection: Connection | null;
  /**
   * Inicializa una nueva instancia del repositorio de préstamos y establece la conexión a la base de datos.
   */
  constructor(){
    this.connection = DatabaseConnection.getInstance().getConnection();
  }

  /**
   * Agrega un nuevo préstamo a la base de datos.
   * @param {Loan} loan - El préstamo que se va a agregar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public add(loan: Loan): Promise<void> {
    if (!this.connection) throw new Error("No hay conexión a la base de datos");
    console.log("Añadiendo loan:", loan);
    // Implementation for creating a loan
    return Promise.resolve();
  }

  /**
   * Actualiza la información de un préstamo existente.
   * @param {string | number} id - Identificador único del préstamo a actualizar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public update(id: string | number, loan: Loan): Promise<void> {
    // Implementation for updating a loan
    console.log("Actualizando loan con el id:", id);
    return Promise.resolve();
  }

  /**
   * Elimina un préstamo de la base de datos por su identificador.
   * @param {string | number} id - Identificador único del préstamo a eliminar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public delete(id: string | number): Promise<void> {
    console.log("Eliminando loan con el id:", id);
    // Implementation for deleting a loan
    return Promise.resolve();
  }

  /**
   * Recupera todos los préstamos de la base de datos.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de todos los préstamos encontrados.
   */
  public getAll(): Promise<Loan[]> {
    console.log("Obteniendo todos los loans");
    // Implementation for getting all loans
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }

  /**
   * Busca un préstamo por su identificador único.
   * @param {string | number} id - Identificador único del préstamo a buscar.
   * @returns {Promise<Loan | null>} Una promesa que resuelve con el préstamo encontrado o null si no existe.
   */
  public getById(id: string | number): Promise<Loan | null> {
    console.log("Obteniendo loan por ID:", id);
    // Implementation for getting a loan by ID
    const loan = new Loan(new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0"), new User("John Doe", "mail@mail.com"), new Date());
    return Promise.resolve(loan);
  }

  /**
   * Busca todos los préstamos realizados por un usuario específico.
   * @param {string} userId - Identificador único del usuario.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos realizados por el usuario.
   */
  public findLoansByUserId(userId: string): Promise<Loan[]> {
    console.log("Obteniendo loans por user ID:", userId);
    // Implementation for finding loans by user ID
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }

  /**
   * Busca todos los préstamos asociados a un libro específico.
   * @param {string} bookId - Identificador único del libro.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos asociados al libro.
   */
  public findLoansByBookId(bookId: string): Promise<Loan[]> {
    console.log("Obteniendo loans por book ID:", bookId);
    // Implementation for finding loans by book ID
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }

  /**
   * Busca todos los préstamos realizados en un rango de fechas determinado.
   * @param {Date} startDate - Fecha de inicio del rango.
   * @param {Date} endDate - Fecha de fin del rango.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos en el rango de fechas.
   */
  public findLoansByDateRange(startDate: Date, endDate: Date): Promise<Loan[]> {
    console.log("Obteniendo loans por rango de fechas:", startDate, "a", endDate);
    // Implementation for finding loans by date range
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }

  /**
   * Busca todos los préstamos realizados en una fecha específica de préstamo.
   * @param {Date} borrowDate - Fecha en la que se realizó el préstamo.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos realizados en la fecha indicada.
   */
  public findLoansByBorrowDate(borrowDate: Date): Promise<Loan[]> {
    console.log("Obteniendo loans por fecha de préstamo:", borrowDate);
    // Implementation for finding loans by borrow date
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }

  /**
   * Busca todos los préstamos que fueron devueltos en una fecha específica.
   * @param {Date} returnDate - Fecha de devolución del préstamo.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos devueltos en la fecha indicada.
   */
  public findLoansByReturnDate(returnDate: Date): Promise<Loan[]> {
    console.log("Obteniendo loans por fecha de devolución:", returnDate);
    // Implementation for finding loans by return date
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }
}
