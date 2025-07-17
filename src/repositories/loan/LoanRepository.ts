import { Loan } from "../../models/Loan";
import { ILoanRepository } from "./ILoanRepository";
import { Repository } from "typeorm";
import { AppDataSource } from "../../config/AppDataSource";

export class LoanRepository implements ILoanRepository{
  private connection: AppDataSource | null;
  private repository: Repository<Loan>;
  /**
   * Inicializa una nueva instancia del repositorio de préstamos y establece la conexión a la base de datos.
   */
  constructor(){
    this.connection = AppDataSource.getInstance();
    this.repository = this.connection.getDataSource().getRepository(Loan);
  }

  /**
   * Agrega un nuevo préstamo a la base de datos.
   * @param {Loan} loan - El préstamo que se va a agregar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public async add(loan: Loan): Promise<void> {
    this.validateConnection();
    console.log("Añadiendo loan:", loan);
    // Implementation for creating a loan
    await this.repository.save(loan);
  }

  /**
   * Actualiza la información de un préstamo existente.
   * @param {string | number} id - Identificador único del préstamo a actualizar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public async update(id: string, updatedLoan: Loan): Promise<void> {
    this.validateConnection();
    // Implementation for updating a loan
    console.log("Actualizando loan con el id:", id);
    const book = await this.getById(id);
    if (!book) throw new Error("Loan no encontrado")
    await this.repository.update(id, updatedLoan);
  }

  /**
   * Elimina un préstamo de la base de datos por su identificador.
   * @param {string | number} id - Identificador único del préstamo a eliminar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public async delete(id: string ): Promise<void> {
    this.validateConnection();
    console.log("Eliminando loan con el id:", id);
    // Implementation for deleting a loan
    const loan = await this.getById(id);
    if (!loan) throw new Error("Loan no encontrado");
    await this.repository.delete(id);
  }

  /**
   * Recupera todos los préstamos de la base de datos.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de todos los préstamos encontrados.
   */
  public async getAll(): Promise<Loan[]> {
    this.validateConnection();
    console.log("Obteniendo todos los loans");
    // Implementation for getting all loans
    return await this.repository.find();
  }

  /**
   * Busca un préstamo por su identificador único.
   * @param {string | number} id - Identificador único del préstamo a buscar.
   * @returns {Promise<Loan | null>} Una promesa que resuelve con el préstamo encontrado o null si no existe.
   */
  public async getById(id: string): Promise<Loan | null> {
    this.validateConnection();
    console.log("Obteniendo loan por ID:", id);
    // Implementation for getting a loan by ID
    return await this.repository.findOneBy({ id });
  }

  /**
   * Busca todos los préstamos realizados por un usuario específico.
   * @param {string} userId - Identificador único del usuario.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos realizados por el usuario.
   */
  public async findLoansByUserId(userId: string): Promise<Loan[]> {
    console.log("Obteniendo loans por user ID:", userId);
    // Implementation for finding loans by user ID
    return await this.repository.find({ where: { userId: userId } as any });
  }

  /**
   * Busca todos los préstamos asociados a un libro específico.
   * @param {string} bookId - Identificador único del libro.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos asociados al libro.
   */
  public async findLoansByBookId(bookId: string): Promise<Loan[]> {
    console.log("Obteniendo loans por book ID:", bookId);
    // Implementation for finding loans by book ID
    return await this.repository.find({ where: { bookId: bookId } as any });
  }

  /**
   * Busca todos los préstamos realizados en un rango de fechas determinado.
   * @param {Date} startDate - Fecha de inicio del rango.
   * @param {Date} endDate - Fecha de fin del rango.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos en el rango de fechas.
   */
  public async findLoansByDateRange(startDate: Date, endDate: Date): Promise<Loan[]> {
    console.log("Obteniendo loans por rango de fechas:", startDate, "a", endDate);
    // Implementation for finding loans by date range
    return this.repository.find({ where: { borrow_date: startDate } });
  }

  /**
   * Busca todos los préstamos realizados en una fecha específica de préstamo.
   * @param {Date} borrowDate - Fecha en la que se realizó el préstamo.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos realizados en la fecha indicada.
   */
  public async findLoansByBorrowDate(borrowDate: Date): Promise<Loan[]> {
    console.log("Obteniendo loans por fecha de préstamo:", borrowDate);
    // Implementation for finding loans by borrow date
    return this.repository.find({ where: { borrow_date: borrowDate } });
  }

  /**
   * Busca todos los préstamos que fueron devueltos en una fecha específica.
   * @param {Date} returnDate - Fecha de devolución del préstamo.
   * @returns {Promise<Loan[]>} Una promesa que resuelve con un arreglo de préstamos devueltos en la fecha indicada.
   */
  public async findLoansByReturnDate(returnDate: Date): Promise<Loan[]> {
    console.log("Obteniendo loans por fecha de devolución:", returnDate);
    // Implementation for finding loans by return date
    return this.repository.find({ where: { return_date: returnDate } });
  }

  /**
   * Valida que exista conexión a la base de datos
   */
  private validateConnection(){
     if (!this.connection) throw new Error("No hay conexión a la base de datos");
  }
}
